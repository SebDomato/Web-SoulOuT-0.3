const nombre = document.getElementById("first_name")
const apellido = document.getElementById("last_name")
const email = document.getElementById("email")
const password = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ //validacion de mail
    parrafo.innerHTML = ""//validacion de contraseña
    if(nombre.value.length <6){
        warnings += "El Nombre no es valido <br>"
        entrar = true
    }
    if(apellido.value.length <6){
        warnings += "El Apellido no es valido <br>"
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += "El Email no es valido <br>"
        entrar = true
    }
    if(password.value.length < 8){
        warnings += "La Contraseña no es valida <br>"
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
})