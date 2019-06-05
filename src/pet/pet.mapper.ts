import { Injectable } from '@nestjs/common';
import { GlobalMapper } from '../global.mapper';
import { PetDTO } from './pet.dto';
import { Pet } from './pet.entity';

@Injectable()
export class PetMapper implements GlobalMapper<PetDTO, Pet> {
  mappObjT1_T2(obj: PetDTO): Pet {
    if(!obj) return undefined;
    const newObj = new Pet();
    newObj.id = obj.id;
    newObj.name = obj.name;
    newObj.color = obj.color;
    return newObj;
  }
  mappListT1_T2(list: PetDTO[]): Pet[] {
    const newList = [];
    for(const obj of list){
      newList.push(this.mappObjT1_T2(obj));
    }
    return newList;
  }
  mappObjT2_T1(obj: Pet): PetDTO {
    if(!obj) return undefined;
    const newObj = new PetDTO();
    newObj.id = obj.id;
    newObj.name = obj.name;
    newObj.color = obj.color;
    return newObj;
  }
  mappListT2_T1(list: Pet[]): PetDTO[] {
    const newList = [];
    for(const obj of list){
      newList.push(this.mappObjT2_T1(obj));
    }
    return newList;
  }
}
