import {
    Injectable,
    ConflictException,
    UnauthorizedException,
  } from '@nestjs/common';
  import { InjectRepository } from '@nestjs/typeorm';
  import { Repository } from 'typeorm';
  import { Customer } from './customer.entity';
  import { CreateCustomerDto } from './dto/create-customer.dto';
  import { LoginCustomerDto } from './dto/login-customer.dto';
  import * as bcrypt from 'bcrypt';
  import { JwtService } from '@nestjs/jwt';
  
  @Injectable()
  export class CustomerService {
    constructor(
      @InjectRepository(Customer)
      private readonly repo: Repository<Customer>,
      private readonly jwtService: JwtService,
    ) {}
  
    async register(dto: CreateCustomerDto): Promise<Customer> {
      const exists = await this.repo.findOne({
        where: [{ phone: dto.phone }, { email: dto.email }],
      });
      if (exists) throw new ConflictException('Phone or email already exists');
  
      const hashedPassword = await bcrypt.hash(dto.password, 10);
      const customer = this.repo.create({ ...dto, password: hashedPassword });
      return this.repo.save(customer);
    }
  
    async login(dto: LoginCustomerDto): Promise<{ access_token: string }> {
      const customer = await this.repo.findOne({ where: { phone: dto.phone } });
      if (!customer || !(await bcrypt.compare(dto.password, customer.password))) {
        throw new UnauthorizedException('Invalid credentials');
      }
  
      const payload = { sub: customer.id, phone: customer.phone };
      const token = this.jwtService.sign(payload);
  
      return { access_token: token };
    }
  }
  