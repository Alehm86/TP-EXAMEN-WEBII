import { Router } from "express";
import {readFile, writeFile} from 'fs/promises'

const router = Router()

const fileProd = await readFile('./server/data/productos.json', 'utf-8')
const prodData = JSON.parse(fileProd)

router.get('/all', (req, res)=>{
    res.status(200).json(prodData)
})
 
router.get('/byCategory/:category', (req,res)=>{
    const category = req.params.category
    const result = prodData.filter(e => e.categoria.nombre === category)

    if(result){
        res.status(200).json(result)
    }else{
        res.status(400).json(`No se encuentra la siguiente categoria: ${id}`)
    }
})

export default router