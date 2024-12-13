import { Router } from "express";
import { newSale, findSales, findSalesByMonth, findSalesByStatus, findSalesById, updateByStatus } from "../data/actions/sales.actions.js";


const router = Router()

router.post('/nvaVenta', async (req, res)=>{
    
    const {id_cliente, total, metodo_pago, id_Address} = req.body
    const fecha = new Date().toLocaleDateString('es-AR', { 
        day:"numeric",
        month:"numeric",
        year:"numeric"        
    })
    const mes = new Date().toLocaleDateString('es-AR', { 
        month:"numeric"    
    })
    const status = "preparing"

    try{
        const result = await newSale({fecha, mes, id_cliente, total, metodo_pago, status, id_Address})
        res.status(200).json({status:true, result})

    }catch(error){
        console.log(error)
        res.status(400).json({status:false})
    }
})

router.get('/all', async(req, res)=>{
    try{
        const result = await findSales()
        res.status(200).json(result)
    }catch(error){
        res.status(400).json()
    }
})

router.get('/ByMonth/:mes', async(req, res)=>{
    const mes = req.params.mes
    try{
        const result = await findSalesByMonth(mes)                       
        res.status(200).json({status:true, result})

    }catch(error){
        res.status(400).json({status: false})
    }
})

router.get('/ByStatus/:status', async(req, res)=>{
    const status = req.params.status
    try{
        const result = await findSalesByStatus(status)                       
        res.status(200).json({status:true, result})

    }catch(error){
        res.status(400).json({status: false})
    }
})

router.get('/ById/:_id', async(req, res)=>{
    const _id = req.params._id
    try{
        const result = await findSalesById(_id)                       
        res.status(200).json({status:true, result})

    }catch(error){
        res.status(400).json({status: false})
    }
})

router.patch('/updateStatus', async(req, res)=>{
    const _id = req.body
    const {status} = req.body
    try{
        const result = await updateByStatus(status, _id)                       
        res.status(200).json({status:true, result})

    }catch(error){
        res.status(400).json({status: false})
    }
})


export default router