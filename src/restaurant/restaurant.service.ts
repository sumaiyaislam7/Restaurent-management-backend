import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { Restaurant } from './restaurant.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';



@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(Restaurant)
    private readonly repo: Repository<Restaurant>,
  ) {}

  async create(dto: CreateRestaurantDto): Promise<Restaurant> {
    const restaurant = this.repo.create(dto);
    return this.repo.save(restaurant);
  }

  async findAll(): Promise<Restaurant[]> {
    return this.repo.find({ relations: ['menus'] });
  }
  async findOne(id: number): Promise<Restaurant | null> {
    return this.repo.findOne({
      where: { id },
      relations: ['menus'],
    });
  }
}
