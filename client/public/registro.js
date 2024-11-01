import { newUsu } from "../api/newUsuario.api.js"
import { API } from "../api/api.js"

const btnReg = document.querySelector('#btnRegistrar')

btnReg.addEventListener('click', async (e)=>{
    e.preventDefault()

    const nombre = document.querySelector('#inpNombre').value;
    const apellido = document.querySelector('#inpApellido').value;
    const username = document.querySelector('#inpUsu').value;
    const email = document.querySelector('#inpEmail').value;
    const pass = document.querySelector('#inpPass').value;

    const datosUsuario = {nombre, apellido, username, email, pass}
    
    const res = await newUsu(datosUsuario)

    if(res.status = true){  
        try{
            window.location.href = `${API}/public/msj_bienvenida.html`
        }catch(error){
            console.log('Error al cargar pagina!')
        }    

    }else{
        console.log('Error al registrar la nuevo usuario!')
    }
})


