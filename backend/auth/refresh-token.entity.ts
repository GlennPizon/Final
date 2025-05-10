// src/auth/refresh-token.entity.ts
import {
    Entity, PrimaryGeneratedColumn, Column,
    ManyToOne
  } from 'typeorm';
  import { Accounts } from '../accounts/accounts.entity';
  
  @Entity()
  export class RefreshToken {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    token: string;
  
    @Column()
    expires: Date;
  
    @Column()
    created: Date;
  
    @Column()
    createdByIp: string;
  
    @Column({ nullable: true })
    revoked: Date;
  
    @Column({ nullable: true })
    revokedByIp: string;
  
    @Column({ nullable: true })
    replacedByToken: string;
  
    @ManyToOne(() => Accounts, account => account.refreshTokens, { onDelete: 'CASCADE' })
    account: Accounts;
  
    get isExpired(): boolean {
      return new Date() >= this.expires;
    }
  
    get isActive(): boolean {
      return !this.revoked && !this.isExpired;
    }
  }
  