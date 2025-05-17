import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Menu } from './menu.entity';
import { Repository } from 'typeorm';
import { CreateMenuDto } from './dto/create-menu.dto';
import { Restaurant } from '../restaurant/restaurant.entity';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private readonly menuRepo: Repository<Menu>,
    @InjectRepository(Restaurant)
    private readonly restaurantRepo: Repository<Restaurant>,
  ) {}

  async create(dto: CreateMenuDto): Promise<Menu> {
    const restaurant = await this.restaurantRepo.findOne({ where: { id: dto.restaurantId } });
    if (!restaurant) throw new NotFoundException('Restaurant not found');

    const menu = this.menuRepo.create({
      name: dto.name,
      price: dto.price,
      description: dto.description,
      restaurant,
    });
    return this.menuRepo.save(menu);
  }

  async findByRestaurant(restaurantId: number): Promise<Menu[]> {
    return this.menuRepo.find({
      where: { restaurant: { id: restaurantId } },
      relations: ['restaurant'],
    });
  }
}
