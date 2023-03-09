let data = sessionStorage.getItem("token");
let inputCassete = document.getElementById("inputCassete")
let casseteContainer = document.getElementById("cassete_container")
let bntoculto = document.getElementById("bntoculto")
let form = document.getElementById("form")

inputCassete.focus();

const Buscar = (event) => {
    console.log(event.keyCode)
    if (event.keyCode == 13) {
        event.preventDefault();
        fetch("http://localhost:3000/v1/casettes")
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