let casettes = document.getElementById("casettes")
let organo = document.getElementById("organo")

const cargarTodos = () => {
    return fetch('http://localhost:3000/v1/casettes', {
        method: 'GET',
        headers: {
            'user-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c3VhcmlvSWQiOjIsImNyZWF0ZWRBdCI6MTY3ODczMzM0OCwiZXhwaXJlZEF0IjoxNjc4NzYyMTQ4fQ.qLIZzErmILZMtMW-QlgTbp0FaauiqBskJ_ua2fES11E',
        },
    }).then(response=>response.json())
}

const cargarPorOrgano = () => {
    return fetch('http://localhost:3000/v1/casettes/organo/'+organo.value, {
        method: 'GET',
        headers: {
            'user-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c3VhcmlvSWQiOjIsImNyZWF0ZWRBdCI6MTY3ODczMzM0OCwiZXhwaXJlZEF0IjoxNjc4NzYyMTQ4fQ.qLIZzErmILZMtMW-QlgTbp0FaauiqBskJ_ua2fES11E',
        },
    }).then(response=>response.json())
}

const imprimirCasettes=(respuesta)=>{
    while (casettes.lastElementChild) {
        casettes.removeChild(casettes.lastElementChild);
      }

    let fragmento=document.createDocumentFragment()
    respuesta.forEach((casete) => {
        let tr = document.createElement("tr")
        let fecha = document.createElement("td")
        fecha.textContent=casete.fecha
        let caracteristicas = document.createElement("td")
        caracteristicas.textContent=casete.caracteristicas
        let observaciones = document.createElement("td")
        observaciones.textContent=casete.observaciones
        let organo = document.createElement("td")
        organo.textContent=casete.organo

        tr.appendChild(fecha)
        tr.appendChild(caracteristicas)
        tr.appendChild(observaciones)
        tr.appendChild(organo)

        fragmento.appendChild(tr)
    });
    casettes.appendChild(fragmento)
}


document.addEventListener("DOMContentLoaded", async()=>{
    const respuesta=await cargarTodos()
    imprimirCasettes(respuesta)
})

organo.addEventListener("change",async()=>{
    const respuesta=await cargarPorOrgano()
    imprimirCasettes(respuesta)
})