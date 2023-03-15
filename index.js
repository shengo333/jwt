import mongoose from "mongoose";
import Express  from "express";
import { register } from "./controllers/usercontroller.js";


mongoose.connect('mongodb+srv://shengo333:testing123@cluster0.z4dv0h1.mongodb.net/jwtAuth?retryWrites=true&w=majority').then(()=> console.log("connected to the database"))

const app = Express()
app.use(Express.json())

app.post("/register", register)

app.listen(3000, ()=> console.log('listening to port 3000'))



