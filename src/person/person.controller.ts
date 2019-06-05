import { Controller, Body, Param, Get, Post, Put, Delete } from '@nestjs/common';
import { ObjectID } from 'typeorm';
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
  async getOne(@Param('id') id: ObjectID): Promise<PersonDTO> {
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
  async update(@Param('id') id: ObjectID, @Body() dto: PersonDTO): Promise<PersonDTO>{
    const obj = this.personMapper.mappObjT1_T2(dto);
    const newObj = await this.personService.update(id, obj);
    return this.personMapper.mappObjT2_T1(newObj);
  }

  @Delete(':id')
  async delete(@Param('id') id: ObjectID): Promise<PersonDTO> {
    return this.personService.delete(id);
  }
}
