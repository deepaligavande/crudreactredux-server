import mongoose from'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const userschema=mongoose.Schema({
    name:String,
    email:String,
    designation:String,
    salary:String
})

autoIncrement.initialize(mongoose.connection);
userschema.plugin(autoIncrement.plugin,'user');

const User=mongoose.model('user',userschema);

export default User;