import { newUser } from "../../../api/newUser.api.js";
import { API } from "../../../api/api.js";

const btnReg = document.querySelector('#btnRegistrar')

btnReg.addEventListener('click', async (e)=>{
    e.preventDefault()


    const name = document.querySelector('#inpNombre').value;
    const lastname = document.querySelector('#inpApellido').value;
    const username = document.querySelector('#inpUsu').value;
    const email = document.querySelector('#inpEmail').value;
    const pass = document.querySelector('#inpPass').value;
    const user = "standard"

    const datosUsuario = {name, lastname, username, email, pass, user}
    const res = await newUser(datosUsuario)

    if(res.status = true){  
        try{
            window.location.href = `${API}/private/admin/html/messageNewUser.html`
        }catch(error){
            console.log('Error al cargar pagina!')
        }    

    }else{
        console.log('Error al registrar la nuevo usuario!')
    }
})