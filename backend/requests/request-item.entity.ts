// src/requests/request-item.entity.ts
import {
    Entity, PrimaryGeneratedColumn, Column,
    ManyToOne
  } from 'typeorm';
  import { Requests } from './request.entity';
  
  @Entity()
  export class RequestItem {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @ManyToOne(() => Requests, request => request.items)
    request: Requests;
  
    @Column()
    name: string;
  
    @Column('int')
    quantity: number;
  }
  