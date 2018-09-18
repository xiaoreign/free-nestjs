import * as jwt from 'jsonwebtoken';
import { Injectable ,HttpService} from '@nestjs/common';
import { JwtPayload } from './interfaces/jwt-payload.interface';


@Injectable()
export class AuthService {
  constructor(private readonly httpService: HttpService) {}
  data:any;

  async createToken(request) {
    const user: JwtPayload = { code: request.code };
    const expiresIn = '1 days';
    const accessToken = jwt.sign(user, 'secretKey', { expiresIn });
    return {
      expiresIn,
      accessToken,
    };
  }
  async getWxLogin(request): Promise<any>{
    let request_url = 'https://api.weixin.qq.com/sns/jscode2session';
    let req ={
        appid:'wx7bc29d2533418dd8',
        secret:'05fa4b38096b4ae92200463118201ce4',
        js_code:request.code,
        grant_type:'authorization_code'
    }
    return new Promise((resolve, reject) => {
      this.httpService.get(request_url,{params:req}).subscribe((res:any)=>{
        if(res.status == 200)
        resolve(res.data)
      });
    })
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    // put some validation logic here
    // for example query user by id/email/username
    return {};
  }
}
