import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class CustomerJwtStrategy extends PassportStrategy(Strategy, 'customer') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'stark-customer-secret',
    });
  }

  async validate(payload: any) {
    return { customerId: payload.sub, phone: payload.phone };
  }
}
