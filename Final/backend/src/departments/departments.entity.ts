// src/departments/department.entity.ts
import {
    Entity, PrimaryGeneratedColumn, Column,
    OneToMany
  } from 'typeorm';
  import { Employees } from '../employees/employees.entity';
  
  @Entity()
  export class Departments {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ unique: true })
    name: string;
  
    @Column()
    description: string;
  
    @OneToMany(() => Employees, employee => employee.department)
    employees: Employees[];
  }
  