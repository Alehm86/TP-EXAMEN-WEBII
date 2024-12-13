const btnLogin = document.getElementById('btnLogin')
const alertContainer = document.getElementById('alert_container')

alertContainer.innerHTML = alert()

import { API } from "../../api/api.js";
import { addSession } from "../../private/controller/sessionStorage_controller.js";
import { alert, handleAlert } from "../../components/alert.js";

const auth = async({email, pass})=>{
    const user = await fetch (`${API}/users/login`,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({"email": email, "pass": pass})
    }).then((res)=>{
        if(!res.ok){
            throw new Error("Error en la petición");
        }
        return res.json()
    }).catch(error => {
        console.error("Error:", error)
        throw new Error("Error en la petición");
    });
    return user
}

btnLogin.addEventListener('click', async (e) => {
    e.preventDefault()
    const email = document.getElementById('email').value
    const pass = document.getElementById('pass').value


    if(email != '' && pass !=''){
        try{
            const user = await auth({email, pass})
            addSession(user)
            if(user.user === "admin"){
                window.location.href = `${API}/private/admin/home.html`               
            }else{
                window.location.href = `${API}/private/home/`
            }

        }catch(error){
            handleAlert('Email o contraseña incorrectos!')
        }
    }else{
        handleAlert('Llenar los campos!')
    }

})