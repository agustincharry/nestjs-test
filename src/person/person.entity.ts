import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Pet } from '../pet/pet.entity';

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column({ length: 500 })
  lastname: string;

  @OneToMany(type => Pet, pet => pet.owner)
  pets: Array<Pet>;
}