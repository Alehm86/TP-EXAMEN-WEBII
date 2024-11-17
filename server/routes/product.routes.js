import { Router } from "express";
import { findAll, findByCategory } from "../data/actions/product.actions.js";

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

export default router