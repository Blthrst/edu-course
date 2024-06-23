import { Controller, Post, Body } from '@nestjs/common';

import {AuthService} from "./auth.service"
import { SignInDto, SignUpDto } from 'src/dtos';

@Controller('auth')
export class AuthController {
    constructor (private authService: AuthService) {}

    @Post("/signin")
    public async signIn(@Body() signInDto: SignInDto) {
        return await this.authService.signIn(signInDto)
    }

    @Post("/signup")
    public async signUp(@Body() signUpDto: SignUpDto) {
        return await this.authService.signUp(signUpDto)
    }
}
