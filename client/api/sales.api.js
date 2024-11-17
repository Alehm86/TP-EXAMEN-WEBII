import { API } from "./api.js"

export const newSale = async (datosVenta) =>{

    try{
        const response = await fetch(`${API}/venta/nvaVenta/`,{
            method:"POST",
            body: JSON.stringify(datosVenta),
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
        console.log('Error al guardar la venta')
    }
}
