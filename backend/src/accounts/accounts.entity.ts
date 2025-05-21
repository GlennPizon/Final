// src/accounts/account.entity.ts
import {
    Entity, PrimaryColumn, Column,
    OneToMany, CreateDateColumn, UpdateDateColumn
  } from 'typeorm';
  import { RefreshToken } from '../auth/refresh-token.entity';
  import { Employees } from '../employees/employees.entity';
  import { Role } from '../utils/role';
  
  @Entity()
  export class Accounts {
    @PrimaryColumn('uuid')
    id: string;
  
    @Column({ unique: true })
    email: string;
  
    @Column({ select: false })
    passwordHash: string;
  
    @Column({ default: Role.User })
    role: Role;
  
    @Column()
    firstName: string;
  
    @Column()
    lastName: string;
  
    @Column()
    title: string;
  
    @Column()
    acceptTerms: boolean;
  
    @Column({ nullable: true })
    verificationToken: string;
  
    @Column({ type: 'timestamp', nullable: true })
    verified: Date;
  
    @Column({ nullable: true })
    resetToken: string;
  
    @Column({ type: 'timestamp', nullable: true })
    resetTokenExpires: Date;
  
    @Column({ type: 'timestamp', nullable: true })
    passwordReset: Date;
  
    @OneToMany(() => RefreshToken, token => token.account)
    refreshTokens: RefreshToken[];
  
    @OneToMany(() => Employees, employee => employee.account)
    employees: Employees[];
  
    @CreateDateColumn()
    created: Date;
  
    @UpdateDateColumn()
    updated: Date;

    @Column({
      type: 'enum',
      enum: ['Active', 'Inactive'],
      default: 'Inactive'
    })
    status: string;

    get isVerified(): boolean {
    return !!this.verified || !!this.passwordReset;
  }
  }
  