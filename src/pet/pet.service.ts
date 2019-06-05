import { Injectable } from '@nestjs/common';
import { ObjectID } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pet } from './pet.entity';

@Injectable()
export class PetService {
  constructor(@InjectRepository(Pet) private readonly repository: Repository<Pet>) {}

  async getAll(): Promise<Pet[]> {
    return await this.repository.find();
  }

  async getOne(id: ObjectID): Promise<Pet> {
    return await this.repository.findOne(id);
  }

  async add(obj: Pet): Promise<Pet> {
    await this.repository.save(obj);
    return obj;
  }

  async update(id: ObjectID, obj: Pet): Promise<Pet> {
    const p = await this.repository.findOne(id);
    p.name = obj.name;
    p.color = obj.color;
    await this.repository.save(p);
    return p;
  }

  async delete(id: ObjectID): Promise<Pet> {
    const p = await this.repository.findOne(id);
    await this.repository.remove(p);
    return p;
  }
}
