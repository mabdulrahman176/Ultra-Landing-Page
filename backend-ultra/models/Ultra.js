import mongoose from "mongoose";

const UltraSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})
const UltraModel = mongoose.model("ultra",UltraSchema)
export default UltraModel;
