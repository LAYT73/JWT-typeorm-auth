import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { sign, verify } from 'jsonwebtoken';
import { LoginUser } from './entities/login-user.entity';
import RefreshToken from './entities/refresh-token.entity';
@Injectable()
export class AuthService {
    constructor( private readonly userService: UserService) { }

    async login(email: string, password: string): Promise<{access_token:string,refresh_token:string}> {
        const obj = {
            role: "user",
            email: email,
            refresh_token: ""
        };

        await this.userService.addUser(email,password);

        const tokens = this.newRefreshAndAccessToken(obj);
        return tokens;
    }

    private async newRefreshAndAccessToken(user: LoginUser): Promise<{ access_token: string; refresh_token: string }> {
        const refreshObject = new RefreshToken({
            email: user.email,
            role: user.role,
        });
        
        const access_token = sign(
        {
            email: user.email,
            role: user.role,
        },
        '7A125D673E2D5E29',
        {
            expiresIn: '15m',
        });
        
        const refresh_token = refreshObject.sign();
        
        return {
            refresh_token: refresh_token,
            access_token: access_token,
        };
    };

    async retriveRefreshToken() {
        
    }

    async refreshAccessToken() {

    };

    async logout() {

    };


}
