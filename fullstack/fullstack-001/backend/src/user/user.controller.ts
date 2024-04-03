import { Body, ConflictException, Controller, Post } from '@nestjs/common';
import { Register } from './register.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.model';
import { Repository } from 'typeorm';
import { Role } from './role.enum';
import { Login } from './login.dto';

@Controller('user')
export class UserController {


    constructor(
        @InjectRepository(User) private userRepository: Repository<User>
    ) {}
    
    @Post('register')
    async register(@Body() register: Register) {
        
        const exists = await this.userRepository.existsBy({
            email: register.email
        });

        if(exists)
            throw new ConflictException("Email ocupado");

        // crear usuario en base de datos
        const user: User = {
            id: 0,
            email: register.email,
            password: register.password,
            phone: '',
            role: Role.USER
        };
        await this.userRepository.save(user);
    }

    @Post('login')
    async login(@Body() login: Login) {

        // comprobar si el email existe

        // Recuperar el usuario

        // Comparar contraseñas
            // si no coinciden lanzar UnauthorizedException

        // Crear y devolver token de acceso
    }
    
}
