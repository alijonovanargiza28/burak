import {Request, Response} from 'express';
import {T} from "../libs/types/common";
import MemberService from '../models/Member.service';
import { MemberInput } from '../libs/types/member';
import { MemberType } from '../libs/enums/member.enum';
import { LoginInput } from '../libs/types/member';

const memberService = new MemberService();

const restaurantController: T ={};
restaurantController.goHome = (req:Request, res: Response)=>{
    try{
        console.log("goHome")
        res.render("Home")
    }catch(err){
        console.log("Error, goHome", err)
    }
}

// restaurantController.getSignup = (req:Request, res: Response)=>{
//     try{
//         console.log("getSignup")
//         res.render("signup")
//     }catch(err){
//         console.log("Error, getSignup", err)
//     }
// };

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        res.render("signup");
    } catch (err) {
        console.log(err);
    }
};

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        res.render("login");
    } catch (err) {
        console.log(err);
    }
};


restaurantController.processSignup = async(req:Request, res: Response)=>{
    try{
        console.log("processSignup")
        console.log("body:", req.body)

        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT

        const result = await memberService.processSignup(newMember);

        res.send(result)
        }catch(err){
        console.log("Error, processSignup", err)
        res.send(err);
    }
};

restaurantController.processLogin = async(req:Request, res: Response)=>{
    try{
        console.log("ProcessLogin")
        console.log('body', req.body)
        const input:LoginInput = req.body;
        console.log(input)
        const result = await memberService.processLogin(input);
        res.send(result)
    }catch(err){
        console.log("Error, processLogin", err)
        res.send(err)
    }
};


export default restaurantController;

