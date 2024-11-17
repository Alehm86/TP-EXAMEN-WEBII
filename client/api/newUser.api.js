import { API } from "./api.js"

export const newUser = async (datosUsuario) =>{
    try{
        const response = await fetch(`${API}/users/create`,{
            method:"POST",
            body: JSON.stringify(datosUsuario),
            headers:{
                'Content-Type': 'application/json'
            }
        })

        if(!response.status){
            throw new error (`Error: ${response.status}`)
        }
        
        const data = await response.json()
        return data
        
    }catch(error){
        console.log('Error al guardar nuevo usuario')
    }
}


