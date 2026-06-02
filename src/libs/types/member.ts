import{ObjectId} from "mongoose"
import { MemberType } from "../enums/member.enum";
export interface Member{
    _id: ObjectId;
    memberType:MemberType;
    memberNick:string;
    memberPhone:string;
    memberPassword?:string;
    memberAdress?:string;
    memberDesc?:string;
    memberImage?:string;
    memberStatus?:string;
    memberPoints: number;
    createdAt:Date;
    updatedAt:Date;


}


export interface MemberInput{
    memberType?:MemberType;
    memberNick:string;
    memberPhone:string;
    memberPassword:string;
    memberAdress?:string;
    memberDesc?:string;
    memberImage?:string;
    memberStatus?:string;
    memberPoints?: number;
    

}