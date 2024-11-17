import mongoose from 'mongoose';

const { Schema, model, models} = mongoose;

const SalesSchema = new Schema({
    fecha:{type: String, required:true},
    id_cliente:{type: String, required:true},
    total:{type: Number, required:true},
    metodo_pago:{type: String, required:true},

})

const Sales = models.sales || model('sales', SalesSchema)

export default Sales