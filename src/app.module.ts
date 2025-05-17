import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerModule } from './customer/customer.module';
import { dataSourceOptions } from './db/data-source';
import { RestaurantModule } from './restaurant/restaurant.module';
import { MenuModule } from './menu/menu.module';
@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), CustomerModule, RestaurantModule,MenuModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
