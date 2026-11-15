import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: [6,'email must be at least 6 characters long'],
        maxLength: [50, 'email must not be longer than 254 characters']
    },

    password: {
        type: String,
        select: false,
    }
})


userSchema.statics.hasPassword = async function( password){
  return await bcrypt.hash(password, 10);  
}

userSchema.method.isValidPassword = async function (password){
    return await bcrypt.compare(password,this.password);
}

userSchema.method.generateJWT = function (){
    return jwt.sign({ email: this.email }, process.email);
}

const User = mongoose.model('user', userSchema);

export default User;