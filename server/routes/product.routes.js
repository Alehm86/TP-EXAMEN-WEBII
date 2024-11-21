import { Router } from "express";
import { findAll, findByCategory, newProduct} from "../data/actions/product.actions.js";

const router = Router()

router.get('/all', async(req, res)=>{
    try{
        const result = await findAll()
        res.status(200).json(result)
    }catch(error){
        res.status(400).json()
    }
})
 
router.get('/byCategory/:category', async (req,res)=>{
    const category = req.params.category

    try{
        const result = await findByCategory(category)
        res.status(200).json(result)
    }catch(error){
        res.status(400).json(`No se encuentra la siguiente categoria: ${id}`)
    }
})

router.post('/create', async (req, res)=>{

    const {marca,espec,imagen,precio,category} = req.body

    try{
        const result = await newProduct({marca,espec,imagen,category,precio})
        res.status(200).json({result, status:true})

    }catch(error){
        console.log(error)
        res.status(400).json({status:false})
    }
})

export default router