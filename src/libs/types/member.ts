import{ObjectId} from "mongoose"
import { MemberType } from "../enums/member.enum";
import { Request } from "express";
import MemberService from "../../models/Member.service";
import { Session } from "express-session";
export interface Member{
    _id: ObjectId;
    memberType:MemberType;
    memberNick:string;
    memberPhone:string;
    memberPassword?:string;
    memberAdress?:string;
    memberDesc?:string;
    memberImage?:string;
    memberStatus?:MemberService;
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
export interface LoginInput{
    memberNick:string;
    memberPassword:string;
}

export interface MemberUpdateInput{
    _id: ObjectId;
    memberNick?:string;
    memberPhone?:string;
    memberPassword?:string;
    memberAdress?:string;
    memberDesc?:string;
    memberImage?:string;
    memberStatus?:string;
   
}

export interface AdminRequest extends Request{
    member: Member;
    session: Session & {member: Member};
    file:Express.Multer.File;
    files:Express.Multer.File[];
}