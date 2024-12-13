
import { newAddress } from "../../../api/address.api.js";
import { id_user } from "../../../api/user.api.js";
import { API } from "../../../api/api.js";

const btnDir = document.getElementById('btnDir')

btnDir.addEventListener('click', async (e)=>{
    e.preventDefault()
     
    const address= document.querySelector('#inpDireccion').value;
    const height= document.querySelector('#inpNumero').value;
    const locality= document.querySelector('#inpLocalidad').value;
    const province= document.querySelector('#inpProvinica').value;
    const postal= document.querySelector('#inpCPostal').value;
    const id_client = id_user
    
    const newItem = {address: address, height: height, locality: locality, province: province, postal: postal, id_client: id_client}
    const data = await newAddress(newItem)
    
    if(data.status = true){  
        try{
            window.location.href = `${API}/private/cart/pages/address.html`
        }catch(error){
            console.log('Error al cargar pagina!')
        }    

    }else{
        console.log('Error al registrar la nuevo usuario!')
    }
})
