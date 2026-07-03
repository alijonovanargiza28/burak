import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import AuthService from "../models/Auth.service";
import Errors from "../libs/Errors";

const memberService = new MemberService();
const authService = new AuthService();

const memberController: T = {};

//REACT
//Sign UP
memberController.Signup = async (req: Request, res: Response) => {
  try {
    console.log("Signup");
    const input: MemberInput = req.body,
      result: Member = await memberService.Signup(input);

    const token = await authService.createToken(result);
    console.log("token:", token);

    res.json({ member: result });
  } catch (err) {
    console.log("Error,Signup", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};
//LOGIN
memberController.Login = async (req: Request, res: Response) => {
  try {
    console.log("Login");
    const input: LoginInput = req.body,
      result = await memberService.Login(input),
      token = await authService.createToken(result);

    res.json({ member: result });
  } catch (err) {
    console.log("Error, Login", err);
    res.send(err);
  }
};

export default memberController;
