import { newUser, findByEmail} from "../api/newUser.api.js";
import { API } from "../api/api.js";

const btnDataUser = document.querySelector('#btndataUser')

btnDataUser.addEventListener('click', async (e)=>{
    e.preventDefault()

    const name = document.querySelector('#inpNombre').value;
    const lastname = document.querySelector('#inpApellido').value;
    const username = document.querySelector('#inpUsu').value;
    const email = document.querySelector('#inpEmail').value;
    const pass = document.querySelector('#inpPass').value;
    const typeUser = "standard"

    const datosUsuario = {name, lastname, username, email, pass, typeUser}
    const res = await newUser(datosUsuario)

    localStorage.setItem("email", JSON.stringify(email));

    if(res.status = true){  
        try{
            window.location.href = `${API}/public/registroAddress.html`
        }catch(error){
            console.log('Error al cargar pagina!')
        }    

    }else{
        console.log('Error al registrar la nuevo usuario!')
    }
})

