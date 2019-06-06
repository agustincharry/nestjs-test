import { PetDTO } from '../pet/pet.dto';

export class PersonDTO {
  id: number;
  name: string;
  lastname: string;
  pets: Array<PetDTO>
}
