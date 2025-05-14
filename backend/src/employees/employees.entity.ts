// src/employees/employee.entity.ts
import {
    Entity, PrimaryGeneratedColumn, Column,
    ManyToOne, OneToMany
  } from 'typeorm';
  import { Departments } from '../departments/departments.entity';
  import { Accounts } from '../accounts/accounts.entity';
  import { Workflow } from '../workflows/workflows.entity';
  import { Requests } from '../requests/request.entity';
  
  @Entity()
  export class Employees {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({type: 'varchar', unique: true })
    employeeId: any;
  
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
  
    @OneToMany(() => Workflow, wf => wf.employee)
    workflows: Workflow[];
  
    @OneToMany(() => Requests, req => req.employee)
    requests: Requests[];
  }
  