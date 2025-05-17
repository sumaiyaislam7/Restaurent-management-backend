import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Menu } from './menu.entity';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import { Restaurant } from '../restaurant/restaurant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Menu, Restaurant])],
  providers: [MenuService],
  controllers: [MenuController],
  exports: [MenuService],
})
export class MenuModule {}
