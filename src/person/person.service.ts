import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from './person.entity';
import { PetService} from '../pet/pet.service';

@Injectable()
export class PersonService {
  constructor(@InjectRepository(Person) private readonly repository: Repository<Person>, private petService: PetService) {}

  async getAll(): Promise<Person[]> {
    return await this.repository.find({relations : ['pets']});
  }

  async getOne(id: number): Promise<Person> {
    return await this.repository.findOne(id);
  }

  async add(obj: Person): Promise<Person> {
    await this.repository.save(obj);
    return obj;
  }

  async update(id: number, obj: Person): Promise<Person> {
    const p = await this.repository.findOne(id);
    p.name = obj.name;
    p.lastname = obj.lastname;
    await this.repository.save(p);
    return p;
  }

  async delete(id: number): Promise<Person> {
    const p = await this.repository.findOne(id);
    await this.repository.remove(p);
    return p;
  }

  async addPet(id: number, petId: number): Promise<Person> {
    const obj = await this.repository.findOne(id);
    const pet = await this.petService.getOne(petId);
    if(!obj.pets) obj.pets = [];
    obj.pets.push(pet);
    await this.repository.save(obj);
    return obj;
  }
}
