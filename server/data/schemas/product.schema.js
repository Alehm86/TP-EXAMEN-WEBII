import mongoose from 'mongoose';

const { Schema, model, models} = mongoose;

const ProductSchema = new Schema({
    id:{type: String, required:true},
    marca:{type: String, required:true},
    espec:{type: String, required:true},
    imagen:{type: String, required:true},
    categoria:{type: String, required:true},
    precio:{type: Number, required:true}
})

const Product = models.Product || model('Product', ProductSchema)

export default Product