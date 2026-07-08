import { shapeIntoMongooseObject } from "../libs/config";
import { ProductStatus } from "../libs/enums/product.enum";
import { ViewGroup } from "../libs/enums/view.enum";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { T } from "../libs/types/common";
import { Product, ProductInput, ProductInquery, ProductUpdateInput } from "../libs/types/product";
import { ViewInput } from "../libs/types/view";
import ProductModel from "../schema/Product.model";
import {ObjectId} from 'mongoose';
import ViewService from "./view.service";

class ProductService{
    private readonly productModel;
    public viewService;


    constructor(){
        this.productModel=ProductModel;
        this.viewService = new ViewService();
    }

//SPA single page application
public async getProducts(inquery: ProductInquery): Promise<Product[]>{
const match: T ={productStatus: ProductStatus.PROCESS};
if (inquery.productCollection){
    match.productCollection = inquery.productCollection;
}
if(inquery.search){
    match.productName={$regex: new RegExp(inquery.search,"i")};//kotta kichik harflarni farqlamaslig uchun
}                                                         //regex qiditirsh qoidasi qayerda Ipnone uchrasa top
const sort:T=
inquery.order ==="productPrice"?
{[inquery.order]:1}:
{[inquery.order]:-1};

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

public async getProduct(
    memberId:ObjectId , 
    id:string):Promise<Product>{
    const productId = shapeIntoMongooseObject(id)

    let result = await this.productModel.findOne({
        _id:productId,
        productStatus: ProductStatus.PROCESS
    }).exec()
    if(!result)throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND)
 
    if(memberId){
        //Check Existance
        const input:ViewInput={
            memberId:memberId,
            viewRefId:productId,
            viewGroup:ViewGroup.PRODUCT

        }
        const existView = await this.viewService.checkViewExistence(input);

        if(!existView){
            //Insert view
            console.log("PLANNING TO INSERT NEW VIEW")
            await this.viewService.insertMemberView(input);


            //Increase count
            const result= await this.productModel.findByIdAndUpdate(
                productId,
                {$inc:{ productViews:+1 }},
                {new:true}
            )
            .exec()
        }
    }
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