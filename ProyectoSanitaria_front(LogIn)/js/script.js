const btnLogin = document.getElementById("btnLogin");
const modal = document.getElementById("modal");
const email = document.getElementById("email");
const password = document.getElementById("password");


const processForm =(event) =>{
    event.preventDefault();
    let newLogin = {
        email:email.value,
        password:password.value,
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
        location.replace('http://127.0.0.1:5001/ProyectoSanitaria_front(LogIn)/pages/casetes.html');
    })
    .catch(error => console.log(error));
}

btnLogin.addEventListener("click", processForm)