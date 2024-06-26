import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import {AuthService} from "./auth.service"
import { SignInDto, SignUpDto } from 'src/dtos';

@ApiTags("Auth")
@Controller('auth')
export class AuthController {
    constructor (private authService: AuthService) {}

    @HttpCode(201)
    @Post("/signin")
    public async signIn(@Body() signInDto: SignInDto) {
        return await this.authService.signIn(signInDto)
    }

    @HttpCode(201)
    @Post("/signup")
    public async signUp(@Body() signUpDto: SignUpDto) {
        return await this.authService.signUp(signUpDto)
    }
}
