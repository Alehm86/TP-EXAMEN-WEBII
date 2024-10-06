import { API } from "./api.js"

export const newVentas = async (datosVenta) =>{
    try{
        const res = fetch(`${API}/venta/nvaVenta`,{
            method:"POST",
            body: JSON.stringify(datosVenta),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        return res
    }catch(error){
        console.log(error)
        return {status:false}
    }
}