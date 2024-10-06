import { Router } from "express";
import { readFile } from 'fs/promises'

const router = Router()

const fileUsers = await readFile('./data/users.json')
const userData = JSON.parse(fileUsers)

router.post('/login', (req, res)=>{
    const email = req.body.email
    const pass = req.body.pass

    const result = userData.find(e => e.email === email && e.pass === pass)

    if(result){
        const data = {
            id: result.id,
            nombre: result.nombre,
            apellido: result.apellido,
            email: result.email,
            status: true
        }
        res.status(200).json(data)
    }else{
        res.status(400).json(`${email} no existe o contraseña incorrecta` + {status: false})
    }
})

export default router