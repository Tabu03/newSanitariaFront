const inputCassete = document.getElementById("inputCassete")
const token = sessionStorage.getItem('token');

const casettes = document.getElementById("casettes")
const organos = document.getElementById("organos")

const btnborrar = document.getElementById("btnborrar")
const btnmodificar = document.getElementById("btnmodificar")
const nuevoCassette = document.getElementById("nuevoCassette")
const nuevaMuestra = document.getElementById("nuevaMuestra")

const files = document.getElementById("files")
console.log(token)


// const Buscar = (event) => {
//     console.log(event.keyCode)
//     if (event.keyCode == 13) {
//         event.preventDefault();
//         fetch("http://localhost:3000/v1/casettes/"+inputCassete.value, {
//             method: "POST",
//             headers: {
//                 "user-token": token
//             },
//         })
//             .then((response) => {
//                 console.log(response)
//                 return response.json()
//             })
//             .then((responseJSON) => {
//                 console.log(responseJSON);
//             })
//             .catch((error) => console.log("Se ha producido un error" + error));
//     }
// }

const cargarTodos = () => {
    return fetch('http://localhost:3000/v1/casettes', {
        method: 'GET',
        headers: {
            'user-token': token,
        },
    }).then(response => response.json())
}

const cargarPorOrgano = () => {
    return fetch('http://localhost:3000/v1/casettes/organo/' + organos.value, {
        method: 'GET',
        headers: {
            'user-token': token,
        },
    }).then(response => response.json())
}

const imprimirCasettes = (respuesta) => {
    while (casettes.lastElementChild) {
        casettes.removeChild(casettes.lastElementChild);
    }

    let fragmento = document.createDocumentFragment()
    respuesta.forEach((casete) => {
        let tr = document.createElement("tr")
        tr.classList.add("table__row")
        let fecha = document.createElement("td")
        fecha.textContent = casete.fecha
        let caracteristicas = document.createElement("td")
        caracteristicas.textContent = casete.caracteristicas
        let organo = document.createElement("td")
        organo.textContent = casete.organo
        let btn = document.createElement("button")
        btn.classList.add("button-details")
        btn.textContent = "Detalles"
        btn.value = casete.id_casette
        let btnCont = document.createElement("td")
        btnCont.appendChild(btn)

        tr.appendChild(fecha)
        tr.appendChild(caracteristicas)
        tr.appendChild(organo)
        tr.appendChild(btnCont)

        fragmento.appendChild(tr)
    });
    casettes.appendChild(fragmento)
}

const anadirCassette = (event) => {
    event.preventDefault();
    let newLogin = {
        fecha: 2001 - 12 - 08,
        caracteristicas: "sdfghjk",
        observaciones: "dsfdgfhgjk",
        imagen: files.files[0],
        qr_casette: "a",
        tecnicoIdTecnico: "1",
        organo: "vejiga",
    }

    fetch("http://localhost:3000/v1/tecnicos/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newLogin)
    }) //  Aqui acaba el fetch
        .then(response => response.json())
        .then(response => {
            sessionStorage.setItem("token", response.succes);
            location.replace('pages/casetes.html');
        })
        .catch(error => console.log(error));
}

document.addEventListener("DOMContentLoaded", async () => {
    const respuesta = await cargarTodos()
    imprimirCasettes(respuesta)
})

organos.addEventListener("change", async () => {
    const respuesta = await cargarPorOrgano()
    imprimirCasettes(respuesta)
})

nuevoCassette.addEventListener("click", anadirCassette)