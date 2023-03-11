import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFormulaire2Dto } from './dto/create-formulaire2.dto';
import { UpdateFormulaire2Dto } from './dto/update-formulaire2.dto';
import { Formulaire2 } from './entities/formulaire2.entity';
 
@Injectable()
export class Formulaire2Service {
  constructor(@InjectRepository(Formulaire2) private formulaire2Repository: Repository<Formulaire2>){}

  create(createFormulaire2Dto: CreateFormulaire2Dto) {
    return this.formulaire2Repository.save(createFormulaire2Dto);
  }

  findAll() {
    return this.formulaire2Repository.find();
  }

  findOne(id: number): Promise<Formulaire2> {
    return  this.formulaire2Repository.findOne({
      where: {
        id,
      }
    });
  }

  async update(id: number, updateFormulaire2Dto: UpdateFormulaire2Dto) {
await this.formulaire2Repository.update(id,updateFormulaire2Dto);  }

 async remove(id: number) {
   await  this.formulaire2Repository.delete(id)
  }
}
