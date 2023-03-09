let container = document.getElementById("container")
let form = document.getElementById("form")
let email = document.getElementById("email")
let inputEmail = document.getElementById("inputEmail")



const compruebaMail = (event) => {
    event.preventDefault()
    fetch("http://localhost:3000/sanitaria/tecnico")
    
      .then((response) => {
        return response.json()
      })
      .then((responseJSON) => {
        // console.log(responseJSON);

        responseJSON.forEach(user => {
            if(user.email == inputEmail.value){
                console.log("email enviado")
            }
            else{
                console.log("error, email NO valido")
            }
        });
        
    
      })

  }


form.addEventListener("submit", compruebaMail)
