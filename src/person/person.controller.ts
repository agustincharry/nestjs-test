import { Controller, Body, Param, Get, Post, Put, Delete } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonMapper } from './person.mapper';
import { PersonDTO } from './person.dto';

@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService, private readonly personMapper: PersonMapper) {}

  @Get()
  async getAll(): Promise<Array<PersonDTO>> {
    const list = await this.personService.getAll();
    return this.personMapper.mappListT2_T1(list);
  }

  @Get(':id')
  async getOne(@Param('id') id: number): Promise<PersonDTO> {
    const obj = await this.personService.getOne(id);
    return this.personMapper.mappObjT2_T1(obj);
  }

  @Post()
  async add(@Body() dto: PersonDTO): Promise<PersonDTO> {
    const obj = this.personMapper.mappObjT1_T2(dto);
    const newObj = await this.personService.add(obj);
    return this.personMapper.mappObjT2_T1(newObj);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() dto: PersonDTO): Promise<PersonDTO>{
    const obj = this.personMapper.mappObjT1_T2(dto);
    const newObj = await this.personService.update(id, obj);
    return this.personMapper.mappObjT2_T1(newObj);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<PersonDTO> {
    return this.personService.delete(id);
  }

  @Post(':id/addPet/:petId')
  async addPet(@Param('id') id: number, @Param('petId') petId: number): Promise<PersonDTO> {
    const newObj = await this.personService.addPet(id, petId);
    return this.personMapper.mappObjT2_T1(newObj);
  }
}
