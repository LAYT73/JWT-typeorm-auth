import { Injectable,  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
    constructor( 
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ){};

    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    };

    async addUser(email:string, password:string): Promise<User> {
        const user = this.userRepository.create({
            email: email,
            password: password,
            role: 'user'
        });
        return this.userRepository.save(user);
    };
}
