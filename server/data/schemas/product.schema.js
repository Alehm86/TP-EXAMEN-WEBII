import mongoose from 'mongoose';

const { Schema, model, models, ObjectID} = mongoose;

const ProductSchema = new Schema({
    marca:{type: String, required:true},
    espec:{type: String, required:true},
    imagen:{type: String, required:true},
    category:{type: String, required:true},
    precio:{type: Number, required:true}
})

const Product = models.Product || model('Product', ProductSchema)

export default Product