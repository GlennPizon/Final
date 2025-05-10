// src/workflows/workflow.entity.ts
import {
    Entity, PrimaryGeneratedColumn, Column,
    ManyToOne, CreateDateColumn
  } from 'typeorm';
  import { Employees } from '../employees/employees.entity';
  
  export enum WorkflowStatus {
    Pending = 'Pending',
    Approved = 'Approved',
    Rejected = 'Rejected',
  }
  
  @Entity()
  export class Workflows {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @ManyToOne(() => Employees, employee => employee.workflows)
    employee: Employees;
  
    @Column()
    type: string; // e.g., "Transfer", "Onboarding"
  
    @Column()
    details: string;
  
    @Column({ type: 'enum', enum: WorkflowStatus, default: WorkflowStatus.Pending })
    status: WorkflowStatus;
  
    @CreateDateColumn()
    createdAt: Date;
  }
  