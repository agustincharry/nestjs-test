import { Injectable } from '@nestjs/common';
import { ObjectID } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from './person.entity';

@Injectable()
export class PersonService {
  constructor(@InjectRepository(Person) private readonly repository: Repository<Person>) {}

  async getAll(): Promise<Person[]> {
    return await this.repository.find();
  }

  async getOne(id: ObjectID): Promise<Person> {
    return await this.repository.findOne(id);
  }

  async add(obj: Person): Promise<Person> {
    await this.repository.save(obj);
    return obj;
  }

  async update(id: ObjectID, obj: Person): Promise<Person> {
    const p = await this.repository.findOne(id);
    p.name = obj.name;
    p.lastname = obj.lastname;
    await this.repository.save(p);
    return p;
  }

  async delete(id: ObjectID): Promise<Person> {
    const p = await this.repository.findOne(id);
    await this.repository.remove(p);
    return p;
  }
}
