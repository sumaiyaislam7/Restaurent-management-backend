import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  name: string;

  @IsString()
  phone: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;
}
