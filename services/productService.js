import Product from "../models/products.js";

export class productService{
    async createProduct(product){
    return await Product.create(product);
    }

    async findProduct(id){
        return await Product.findOne(id);
    }

    async findProducts(){
        return await product.findOne()
    }

    async updateProducts(id){
        return await Product.findByIdAndUpdate(id);

    }

    async deleteProducts(id){
        return await Product.findByIdAndDelete(id) 
       }

}