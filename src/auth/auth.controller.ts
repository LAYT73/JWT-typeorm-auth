import { Controller, Get, Post, Delete, Put, Body, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Get('hello')
    async getHello(): Promise<string> {
        return 'Hello World';
    };



}
