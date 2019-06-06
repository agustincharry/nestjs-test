import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './person.entity'
import { PersonController } from './person.controller';
import { PersonService } from './person.service';
import { PersonMapper } from './person.mapper';
import { PetMapper } from '../pet/pet.mapper';
import { PetService } from '../pet/pet.service';
import { Pet } from '../pet/pet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Person, Pet])],
  controllers: [PersonController],
  providers: [PersonMapper, PetMapper, PersonService, PetService]
})
export class PersonModule {}
