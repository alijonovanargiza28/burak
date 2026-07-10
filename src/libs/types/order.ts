import {ObjectId} from "mongoose"
import { OrderStatus } from "../enums/order.enum";


export interface OrderItem {
  _id: ObjectId;
  itemQuentity: number;
  itemPrice: number;
  orderId: ObjectId;
  productId: ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export interface Order{
    _id:ObjectId;
    orderTotal:number;
    orderDelivery:number;
    orderStatus:OrderStatus;
    memberId:ObjectId;
    createdAt:Date;
   updatedAt:Date;
//    from aggragation
   orderItems:OrderItem[];
}

export interface OrderItemInput {
  map(arg0: (item: OrderItemInput) => void): unknown;
  itemQuentity: number;
  itemPrice: number;
  productId:ObjectId;
  orderId?:ObjectId
}

export interface OrderInquiry{
    page:number;
    limit:number;
    orderStatus:OrderStatus
}