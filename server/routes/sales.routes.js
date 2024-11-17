import { Router } from "express";
import { newSale } from "../data/actions/sales.actions.js";

const router = Router()

router.post('/nvaVenta', async (req, res)=>{
    
    const {id_cliente, total, metodo_pago} = req.body
    const fecha = new Date().toLocaleDateString('es-AR', { 
        day:"numeric",
        month:"numeric",
        year:"numeric"        
    })

    try{
        const result = await newSale({fecha, id_cliente, total, metodo_pago})
        res.status(200).json({status:true, result})

    }catch(error){
        console.log(error)
        res.status(400).json({status:false})
    }
})

export default router