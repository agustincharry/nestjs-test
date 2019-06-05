import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from './pet.entity'
import { PetController } from './pet.controller';
import { PetService } from './pet.service';
import { PetMapper } from './pet.mapper';

@Module({
  imports: [TypeOrmModule.forFeature([Pet])],
  controllers: [PetController],
  providers: [PetMapper, PetService]
})
export class PetModule {}
