import { ObjectID } from 'typeorm';

export class PersonDTO {
  id: ObjectID;
  name: string;
  lastname: string;
}
