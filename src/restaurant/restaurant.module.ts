import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from './restaurant.entity';
import { RestaurantService } from './restaurant.service';
import { RestaurantController } from './restaurant.controller';
import { MenuService } from 'src/menu/menu.service';
import { MenuModule } from '../menu/menu.module';


@Module({
  imports: [TypeOrmModule.forFeature([Restaurant]),MenuModule],
  providers: [RestaurantService],
  controllers: [RestaurantController],
})
export class RestaurantModule {}
