import { Controller, Body, Param, Get, Post, Put, Delete } from '@nestjs/common';
import { ObjectID } from 'typeorm';
import { PersonService } from './person.service';
import { AddPersonDTO } from './dto/add-person.dto'

@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Get(':id')
  getOne(@Param('id') id: ObjectID) {
    return this.personService.getOne(id);
  }

  @Get()
  getAll() {
    return this.personService.getAll();
  }

  @Post()
  add(@Body() dto: AddPersonDTO) {
    return this.personService.add(dto);
  }

  @Put(':id')
  update(@Param('id') id: ObjectID, @Body() dto: AddPersonDTO){
    return this.personService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: ObjectID) {
    return this.personService.delete(id);
  }
}
