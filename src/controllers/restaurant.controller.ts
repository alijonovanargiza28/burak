import {Request, Response} from 'express';
import {T} from "../libs/types/common";
import memberService from "../models/Member.service"
import MemberService from '../models/Member.service';
import { MemberInput } from '../libs/types/member';
import { MemberType } from '../libs/enums/member.enum';
import { LoginInput } from '../libs/types/member';

const restaurantController: T ={};
restaurantController.goHome = (req:Request, res: Response)=>{
    try{
        console.log("goHome")
        res.send("Home Page")
    }catch(err){
        console.log("Error, goHome", err)
    }
}

restaurantController.getLogin = (req:Request, res: Response)=>{
    try{
        console.log("getLogin")
        res.send("Login Page")
    }catch(err){
        console.log("Error, getLogin", err)
    }
}

restaurantController.getSignup = (req:Request, res: Response)=>{
    try{
        console.log("getSignup")
        res.send("Signup")
    }catch(err){
        console.log("Error, getSignup", err)
    }
};

restaurantController.processLogin = async(req:Request, res: Response)=>{
    try{
        console.log("ProcessLogin")
        console.log('body', req.body)
        const input:LoginInput = req.body;
        console.log(input)
        const memberService = new MemberService()
        const result = await memberService.processLogin(input);
        res.send(result)
    }catch(err){
        console.log("Error, processLogin", err)
        res.send(err)
    }
};

restaurantController.processSignup = async(req:Request, res: Response)=>{
    try{
        console.log("processSignup")
        console.log("body:", req.body)

        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT

        const memberService = new MemberService();
        const result = await memberService.processSignup(newMember);

        res.send(result)
        }catch(err){
        console.log("Error, processSignup", err)
        res.send(err);
    }
};

export default restaurantController;

