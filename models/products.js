import mongoose from "mongoose";

const productSchema= new mongoose.Schema({
    name:{type: String, required:true},
    price:{type:Number, default: 0.0,required:true},
    quantity:{type:Number,default:1,required:true},
    number_in_stock:{type:Number},
    type_in_stock:{type:String },
    category: [{type:mongoose.Types.ObjectId,ref:'Category'}]

},{timestamp:true});

const Product= mongoose.model('Product',productSchema);
export default Product;