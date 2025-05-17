import { Body, Controller, Get, Post } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UseGuards } from '@nestjs/common';
import { CustomerJwtGuard } from '../customer/customer-jwt.guard'; 
import { Param } from '@nestjs/common';
import { Restaurant } from './restaurant.entity';

@Controller('restaurants')
export class RestaurantController {
  constructor(private readonly service: RestaurantService) {}
@UseGuards(CustomerJwtGuard)
  @Post()
  create(@Body() dto: CreateRestaurantDto) {
    return this.service.create(dto);
  }
 @UseGuards(CustomerJwtGuard)
  @Get()
  findAll() {
    return this.service.findAll();
  }
  @UseGuards(CustomerJwtGuard)

  @Get(':id')
async findOne(@Param('id') id: string): Promise<Restaurant | null> {
  return this.service.findOne(+id);
}

}
