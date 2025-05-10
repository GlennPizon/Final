// src/requests/request.entity.ts
import {
    Entity, PrimaryGeneratedColumn, Column,
    ManyToOne, OneToMany
  } from 'typeorm';
  import { Employees } from '../employees/employee.entity';
  import { RequestItem } from './request-item.entity';
  
  @Entity()
  export class Requests {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @ManyToOne(() => Employees, employee => employee.requests)
    employee: Employees;
  
    @Column()
    type: string; // e.g., "Leave", "Equipment"
  
    @Column({ default: 'Pending' })
    status: string;
  
    @OneToMany(() => RequestItem, item => item.request, { cascade: true })
    items: RequestItem[];
  }
  