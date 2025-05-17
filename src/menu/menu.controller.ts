import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UseGuards } from '@nestjs/common';
import { CustomerJwtGuard } from '../customer/customer-jwt.guard'; 

@Controller('menus')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  create(@Body() dto: CreateMenuDto) {
    return this.menuService.create(dto);
  }
@UseGuards(CustomerJwtGuard)
@Get(':id')
getMenus(@Param('id') id: number) {
  return this.menuService.findByRestaurant(id);
}

}
