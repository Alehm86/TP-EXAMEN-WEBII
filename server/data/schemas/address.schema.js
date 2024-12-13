import mongoose from 'mongoose';

const { Schema, model, models, ObjectId} = mongoose;

const AddressSchema = new Schema({
    id_client:{type: ObjectId, required:true, ref:"user"},
    address:{type: String, required:true},
    height :{type: Number, required:true},
    locality:{type: String, required:true},
    postal:{type: Number, required:true},
    province:{type: String, required:true},
    status:{type: String, required: true}

})

const Address = models.address || model('address', AddressSchema)

export default Address