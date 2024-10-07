import { Router } from "express";
import { readFile, writeFile } from 'fs/promises'

const router = Router()

const getData = async()=>{
    const fileVentas = await readFile('./server/data/ventas.json', 'utf-8')
    return JSON.parse(fileVentas)
}

router.post('/nvaVenta', async (req, res)=>{
    const {id_cliente, total, metodo_pago} = req.body
    const ventasData = await getData()
    const id_venta = ventasData[ventasData.length-1].id_venta + 1
    
    const fecha = new Date().toLocaleDateString('en-us', { 
        day:"numeric",
        month:"numeric",
        year:"numeric"        
    })

    try{
        ventasData.push({id_venta, fecha, id_cliente, total, metodo_pago})
        writeFile('./server/data/ventas.json', JSON.stringify(ventasData,null,2))
        res.status(200).json({status:true})

    }catch(error){
        console.log(error)
        res.status(400).json({status:false})
    }
})

export default router