import { IsString, IsEmail, IsNumber } from 'class-validator';

export class SignInDto {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}

export class SignUpDto extends SignInDto {
  @IsString()
  repeat: string;
}

export class UserObjectDto {
    id: string
    token: string
}

export class ProjectCreationDto {
  @IsString()
  title: string;

  @IsNumber()
  created_at: string;

  @IsString()
  user_id: string;
}

export class ProjectEditionDto {
  @IsString()
  id: number;

  @IsString()
  title: string;

  @IsNumber()
  created_at: string;

  @IsString()
  user_id: string;
}