import { DataSourceOptions } from 'typeorm';
import { Customer } from '../customer/customer.entity';
import { Restaurant } from '../restaurant/restaurant.entity';
import { Menu } from 'src/menu/menu.entity';

export const dataSourceOptions: DataSourceOptions = {
type: 'postgres',
host: 'localhost',
port: 5432,
username: 'postgres',
password: 'saad', 
database: 'resturent owner', 
synchronize: true, 
entities: [ Customer,Restaurant,Menu,],
};