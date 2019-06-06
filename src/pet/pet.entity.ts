import { Entity, Column, PrimaryGeneratedColumn, ObjectIdColumn, ManyToOne } from 'typeorm';
import { Person } from '../person/person.entity';

@Entity()
export class Pet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column({ length: 500 })
  color: string;

  @ManyToOne(type => Person, person => person.pets)
  owner: Person;
}