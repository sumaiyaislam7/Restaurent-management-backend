import { Body, Controller, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { LoginCustomerDto } from './dto/login-customer.dto';
import { UseGuards, Get, Request } from '@nestjs/common';
import { CustomerJwtGuard } from './customer-jwt.guard';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post('register')
  register(@Body() dto: CreateCustomerDto) {
    return this.customerService.register(dto);
  }

  @Post('login')
  login(@Body() dto: LoginCustomerDto) {
    return this.customerService.login(dto);
  }

  @UseGuards(CustomerJwtGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user; 
  }
  

}
