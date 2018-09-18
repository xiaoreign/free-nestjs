import { Controller, Get, UseGuards, Query, HttpService, Param} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService,
              private readonly httpService: HttpService
  ) {}

  @Get('find')
  async find(@Query() params){
    console.log(params)
  }

  @Get('token')
  async createToken(@Query() request) {
    let info = await this.authService.getWxLogin(request);
    let data = await this.authService.createToken(request);
    const success = true;
    return {
      success,
      data,
      info
    }
  }

  @Get('data')
  @UseGuards(AuthGuard('jwt'))
  findAll() {
    const success = true;
    return {
      success
    }
    // this route is restricted
  }
}
