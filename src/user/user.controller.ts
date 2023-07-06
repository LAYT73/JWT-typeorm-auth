import { Controller, Get, Post, Delete, Put, Body, Req, Res } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async getUsers() {
        return await this.userService.findAll();
    };

    @Post()
    async addUser(@Body() body) {
        return await this.userService.addUser(body.email, body.password);
    };

}
