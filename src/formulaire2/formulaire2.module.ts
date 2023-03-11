import { Module } from '@nestjs/common';
import { Formulaire2Service } from './formulaire2.service';
import { Formulaire2Controller } from './formulaire2.controller';
import { Formulaire2 } from './entities/formulaire2.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Formulaire2])],
  controllers: [Formulaire2Controller],
  providers: [Formulaire2Service]
})
export class Formulaire2Module {}
