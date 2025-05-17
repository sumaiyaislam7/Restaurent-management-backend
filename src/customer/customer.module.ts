import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './customer.entity';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { JwtModule } from '@nestjs/jwt';
import { CustomerJwtStrategy } from './customer-jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([Customer]),
    JwtModule.register({
      secret: 'stark-customer-secret',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [CustomerService, CustomerJwtStrategy],
  controllers: [CustomerController],
})
export class CustomerModule {}
