import { Controller, Get, Post, Delete, Put, Body, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService,
        ) {}

    @UseGuards(JwtAuthGuard)
    @Get('hello')
    async getHello(): Promise<string> {
        return 'Hello World';
    };

    @Post('login')
    async login(@Body() body): Promise<{access_token:string, refresh_token:string}> {
        return this.authService.login(body.email, body.password);
    };



}
