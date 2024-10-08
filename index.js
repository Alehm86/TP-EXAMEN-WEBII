import express from 'express'
import cors from 'cors'

import { API } from './client/api/api.js'

import userRouter from './server/routes/users.routes.js'
import prodRouter from './server/routes/productos.routes.js'
import ventasRouter from './server/routes/ventas.routes.js'

const app = express()
const port = 3006


app.use(express.json());
app.listen(port, ()=>{
    console.log(`Servidor online en puerto: ${port}.`)
})


const corsOptions = { origin: `${API}`, 
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
}; 

app.use(express.static('./client'));
app.use(cors(corsOptions));

app.use('/users', userRouter)
app.use('/products', prodRouter)
app.use('/venta', ventasRouter)