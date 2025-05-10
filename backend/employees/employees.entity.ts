// src/employees/employee.entity.ts
import {
    Entity, PrimaryGeneratedColumn, Column,
    ManyToOne, OneToMany
  } from 'typeorm';
  import { Departments } from '../departments/department.entity';
  import { Accounts } from '../accounts/account.entity';
  import { Workflows } from '../workflows/workflow.entity';
  import { Requests } from '../requests/request.entity';
  
  @Entity()
  export class Employees {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ unique: true })
    employeeId: string;
  
    @ManyToOne(() => Accounts, account => account.employees)
    account: Accounts;
  
    @ManyToOne(() => Departments, department => department.employees)
    department: Departments;
  
    @Column()
    position: string;
  
    @Column({ type: 'date' })
    hireDate: Date;
  
    @Column()
    status: string;
  
    @OneToMany(() => Workflows, wf => wf.employee)
    workflows: Workflows[];
  
    @OneToMany(() => Requests, req => req.employee)
    requests: Requests[];
  }
  