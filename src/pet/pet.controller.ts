import { Controller, Body, Param, Get, Post, Put, Delete } from '@nestjs/common';
import { PetService } from './pet.service';
import { PetMapper } from './pet.mapper';
import { PetDTO } from './pet.dto';

@Controller('pet')
export class PetController {
  constructor(private readonly petService: PetService, private readonly petMapper: PetMapper) {}

  @Get()
  async getAll(): Promise<Array<PetDTO>> {
    const list = await this.petService.getAll();
    return this.petMapper.mappListT2_T1(list);
  }

  @Get(':id')
  async getOne(@Param('id') id: number): Promise<PetDTO> {
    const obj = await this.petService.getOne(id);
    return this.petMapper.mappObjT2_T1(obj);
  }

  @Post()
  async add(@Body() dto: PetDTO): Promise<PetDTO> {
    const obj = this.petMapper.mappObjT1_T2(dto);
    const newObj = await this.petService.add(obj);
    return this.petMapper.mappObjT2_T1(newObj);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() dto: PetDTO): Promise<PetDTO>{
    const obj = this.petMapper.mappObjT1_T2(dto);
    const newObj = await this.petService.update(id, obj);
    return this.petMapper.mappObjT2_T1(newObj);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<PetDTO> {
    return this.petService.delete(id);
  }
}
