import { Injectable } from '@nestjs/common';
import { GlobalMapper } from '../global.mapper';
import { PetMapper } from '../pet/pet.mapper';
import { PersonDTO } from './person.dto';
import { Person } from './person.entity';

@Injectable()
export class PersonMapper implements GlobalMapper<PersonDTO, Person> {
  
  constructor(private petMapper: PetMapper){}

  mappObjT1_T2(obj: PersonDTO): Person {
    if(!obj) return undefined;
    const newObj = new Person();
    newObj.id = obj.id;
    newObj.name = obj.name;
    newObj.lastname = obj.lastname;
    newObj.pets = this.petMapper.mappListT1_T2(obj.pets);
    return newObj;
  }
  mappListT1_T2(list: PersonDTO[]): Person[] {
    if(!list) return [];
    const newList = [];
    for(const obj of list){
      newList.push(this.mappObjT1_T2(obj));
    }
    return newList;
  }
  mappObjT2_T1(obj: Person): PersonDTO {
    if(!obj) return undefined;
    const newObj = new PersonDTO();
    newObj.id = obj.id;
    newObj.name = obj.name;
    newObj.lastname = obj.lastname;
    newObj.pets = this.petMapper.mappListT2_T1(obj.pets);
    return newObj;
  }
  mappListT2_T1(list: Person[]): PersonDTO[] {
    if(!list) return [];
    const newList = [];
    for(const obj of list){
      newList.push(this.mappObjT2_T1(obj));
    }
    return newList;
  }
}
