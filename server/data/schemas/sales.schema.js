import mongoose from 'mongoose';

const { Schema, model, models, ObjectId} = mongoose;

const SalesSchema = new Schema({
    fecha:{type: String, required:true},
    id_cliente:{type: ObjectId, required:true, ref:"user"},
    mes:{type: Number, required:true},
    total:{type: Number, required:true},
    metodo_pago:{type: String, required:true},
    status:{type: String, required:true},
    id_Address:{type: ObjectId, required:true, ref:"address"}

})

const Sales = models.sales || model('sales', SalesSchema)

export default Sales