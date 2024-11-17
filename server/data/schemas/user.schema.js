import mongoose from 'mongoose';

const { Schema, model, models} = mongoose;

const UserSchema = new Schema({
    name:{type: String, required:true},
    lastname:{type: String, required:true},
    username:{type: String, required:true},
    email:{type: String, required:true, unique:true},
    pass:{type: String, required:true},
    user:{tyoe: String, required:true}
})

const User = models.user || model('user', UserSchema)

export default User