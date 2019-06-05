import { Entity, Column, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class Pet {
  @ObjectIdColumn()
  id: ObjectID;

  @Column({ length: 500 })
  name: string;

  @Column({ length: 500 })
  color: string;
}