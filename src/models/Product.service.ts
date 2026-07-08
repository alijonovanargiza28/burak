import { shapeIntoMongooseObject } from "../libs/config";
import { ProductStatus } from "../libs/enums/product.enum";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { T } from "../libs/types/common";
import { Product, ProductInput, ProductInquery, ProductUpdateInput } from "../libs/types/product";
import ProductModel from "../schema/Product.model";

class ProductService{
    private readonly productModel;
    constructor(){
        this.productModel=ProductModel;
    }

//SPA single page application
public async getproduct(inquery: ProductInquery): Promise<Product[]>{
const match: T ={productStatus: ProductStatus.PROCESS};
if (inquery.productCollection){
    match.productCollection = inquery.productCollection;
}
if(inquery.search){
    match.productName={$regex: new RegExp(inquery.search,"i")};
}
const sort:T=
inquery.order ==="productPrice"?{[inquery.order]:1}:{[inquery.order]:-1};

const result = await this.productModel.aggregate([
    {$match:match},
    {$sort:sort},
    {$skip:(inquery.page *1 -1) * inquery.limit},
    {$limit:inquery.limit *1},
])
.exec();
if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);
return result
}


//SSR backend da frontent qurish
public async getAllProduct():Promise<Product[]>{
const result =await this.productModel
.find().exec();
if(!result)throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

console.log("Result", result)
return result;
}


public async createNewProduct(input: ProductInput):Promise<Product>{
try{
  return await this.productModel.create(input)
}catch(err){
    console.error("Error, model:createNewProduct", err)
    throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
}

}


public async updateChosenProduct(
    id:string,
    input: ProductUpdateInput):
Promise<Product>{
id=shapeIntoMongooseObject(id)
const result =await this.productModel
.findOneAndUpdate({_id: id}, input, {new:true})
.exec();
if(!result)throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);

console.log("Result", result)
return result;
}
}



export default ProductService