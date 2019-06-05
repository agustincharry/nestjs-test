import { Injectable } from '@nestjs/common';
import { ObjectID } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from './person.entity';
import { AddPersonDTO } from './dto/add-person.dto';

@Injectable()
export class PersonService {
  constructor(@InjectRepository(Person) private readonly repository: Repository<Person>) {}

  getAll(): Promise<Person[]> {
    return this.repository.find();
  }

  getOne(id: ObjectID): Promise<Person> {
    return this.repository.findOne(id);
  }

  async add(person: AddPersonDTO) {
    const p = new Person();
    p.name = person.name;
    p.lastname = person.lastname;
    await this.repository.save(p);
    return p;
  }

  async update(id: ObjectID, person: AddPersonDTO) {
    const p = await this.repository.findOne(id);
    p.name = person.name;
    p.lastname = person.lastname;
    await this.repository.save(p);
    return p;
  }

  async delete(id: ObjectID): Promise<Person> {
    const p = await this.repository.findOne(id);
    await this.repository.remove(p);
    return p;
  }
}
