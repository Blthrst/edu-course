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
  id: string;
  token: string;
}

export namespace ProjectDtos {
  export class ProjectCreationDto {
    @IsString()
    title: string;

    @IsNumber()
    created_at: string;

    @IsString()
    user_id: string;
  }

  export class ProjectEditionDto extends ProjectCreationDto {
    @IsString()
    id: number;
  }
}

export namespace ColumnDtos {
  export class ColumnCreationDto {
    @IsNumber()
    number: number;

    @IsString()
    title: string;

    @IsNumber()
    project_id: number;
  }

  export class ColumnEditionDto extends ColumnCreationDto {
    @IsNumber()
    id: number;
  }
}
