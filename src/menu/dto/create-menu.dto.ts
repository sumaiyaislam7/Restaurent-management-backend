import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateMenuDto {
  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNumber()
  restaurantId: number;
}
