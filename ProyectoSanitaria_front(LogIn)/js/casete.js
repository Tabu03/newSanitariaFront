const data = sessionStorage.getItem("token");
const inputCassete = document.getElementById("inputCassete")
const casseteContainer = document.getElementById("cassete_container")
const bntoculto = document.getElementById("bntoculto")
const form = document.getElementById("form")
const token = sessionStorage.getItem('token');
console.log(token)

inputCassete.focus();

const Buscar = (event) => {
    console.log(event.keyCode)
    if (event.keyCode == 13) {
        event.preventDefault();
        fetch("http://localhost:3000/v1/casettes/"+inputCassete.value, {
            method: "POST",
            headers: {
                "user-token": token
            },
        })
            .then((response) => {
                console.log(response)
                return response.json()
            })
            .then((responseJSON) => {
                console.log(responseJSON);
            })
            .catch((error) => console.log("Se ha producido un error" + error));
    }
}


document.addEventListener("keydown", Buscar)