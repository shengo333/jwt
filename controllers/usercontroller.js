import userModel from "../models/user.js";
import bcrypt from "bcrypt"

export async function register(req, res){
    const password = req.body.password 
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    console.log(hash, 'this is salt')
    const doc = new userModel({
        name: req.body.name,
        password: hash,
        email: req.body.email 
    })
    const user = await doc.save()
    res.json({result: user._doc})
}





