import { API } from "../api/api.js";
import { newAddress } from "../api/address.api.js";
import { findByEmail} from "../api/newUser.api.js";

const btnDataAddress = document.querySelector('#btnRegistrar')
const email = JSON.parse(localStorage.getItem("email"));
const dataUser = await findByEmail(email)

btnDataAddress.addEventListener('click', async (e)=>{
    e.preventDefault()

    const address = document.querySelector('#inpAddress').value;
    const height = document.querySelector('#inpHeight').value;
    const locality = document.querySelector('#inpLocality').value;
    const postal = document.querySelector('#inpPostal').value;
    const province = document.querySelector('#inpProvince').value;
    const id_client = dataUser.result._id

    const dataAddress = {id_client, address, height, locality, postal, province}
    const res = await newAddress(dataAddress)

    if(res.status = true){  
        try{
            window.location.href = `${API}/public/msjWellcome.html`
        }catch(error){
            console.log('Error al cargar pagina!')
        }    

    }else{
        console.log('Error al registrar la nuevo usuario!')
    }
})


