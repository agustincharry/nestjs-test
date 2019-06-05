import { ObjectID } from 'typeorm';

export class PetDTO {
  id: ObjectID;
  name: string;
  color: string;
}
