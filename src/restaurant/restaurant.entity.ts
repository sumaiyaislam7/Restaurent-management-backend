import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Menu } from '../menu/menu.entity';

@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  location: string;

  @Column()
  phone: string;

  @OneToMany(() => Menu, menu => menu.restaurant, { cascade: true })
  menus: Menu[];
  
}
