import {Request, Response} from 'express';
import {T} from "../libs/types/common";
import MemberService  from '../models/Member.service';
import { LoginInput, Member, MemberInput } from '../libs/types/member';


const memberService = new MemberService();


const memberController: T ={}
//REACT

memberController.Signup = async(req:Request, res: Response)=>{
    try{ 
        console.log("Signup")
        const input:MemberInput = req.body
        const result: Member = await memberService.Signup(input);
     
        res.json({member:result})
        }catch(err){
        console.log("Error,Signup", err)
        res.json({err})
    }
};

memberController.Login = async(req:Request, res: Response)=>{
    try{
        console.log("Login")
        const input:LoginInput = req.body,
        result = await memberService.Login(input);

        res.json({member:result})
    }catch(err){
        console.log("Error, Login", err)
        res.send(err)
    }
};


export default memberController;

