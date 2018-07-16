import { Controller, Get, UseGuards, Query, HttpService } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService,
              private readonly httpService: HttpService
  ) {}

  @Get('index')
  root() {
    return {data:'hello world!'};
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
    // this route is restricted
  }
}
