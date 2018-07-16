import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';
import { HttpService } from '@nestjs/common';

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, HttpService],
})
export class AuthModule {}
