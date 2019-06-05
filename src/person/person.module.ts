import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './person.entity'
import { PersonController } from './person.controller';
import { PersonService } from './person.service';
import { PersonMapper } from './person.mapper';

@Module({
  imports: [TypeOrmModule.forFeature([Person])],
  controllers: [PersonController],
  providers: [PersonMapper, PersonService]
})
export class PersonModule {}
