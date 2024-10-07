import { getSession } from "../../controller/sessionStorage_controller";
import { newVentas } from "../../../api/ventas.api";

const user = getSession('user')
const btnFin = document.getElementById('btnFin');
const datosCuotas= JSON.parse(localStorage.getItem("datosCuotas"));

btnFin.addEventListener('click', async(e)=>{
    e.preventDefault()

    const id = user.id
    const metodo_pago = 2
    const total = 0
    
    datosCuotas.forEach(cuotas => {
        total = cuotas.total
    })

    const datosVenta = {
        id,
        total,
        metodo_pago
    }
    const res = await newVentas(datosVenta)
   
    if(res.status){
        console.log('Venta registrada')
    }else{
        console.log('Error al registrar la venta!')
    }
    
} );