import { MemberType } from "../libs/enums/member.enum";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { Member, MemberInput } from "../libs/types/member";
import MemberModule from "../schema/Member.module";
class MemberService{
    private readonly memberModel;

    constructor(){
        this.memberModel = MemberModule;
    }

    public async processSignup(input:MemberInput):Promise<Member>{
        const exits = await this.memberModel
        .findOne({memberType:MemberType.RESTAURANT})
        .exec();

        if(exits)  throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED );
        try{
            const result = await this.memberModel.create(input)
            result.memberPassword = "";
            return result;
        }catch(err){
           throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED );
        }   
    }
}

export default MemberService;

