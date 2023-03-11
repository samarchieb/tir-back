import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFormulaireDto } from './dto/create-formulaire.dto';
import { UpdateFormulaireDto } from './dto/update-formulaire.dto';
import { Formulaire } from './entities/formulaire.entity';
 
@Injectable()
export class FormulaireService {
  constructor(@InjectRepository(Formulaire) private formulaireRepository: Repository<Formulaire>){}

  create(createFormulaireDto: CreateFormulaireDto) {
    return this.formulaireRepository.save(createFormulaireDto);
  }

  findAll() {
    return this.formulaireRepository.find();
  }

  findOne(id: number) : Promise<Formulaire>{
    return this.formulaireRepository.findOne({
      where: {
        id,
      }
    });
  }

  async update(id: number, updateFormulaireDto: UpdateFormulaireDto) {
   await  this.formulaireRepository.update(id,updateFormulaireDto)
  }

 async  remove(id: number) {
   await this.formulaireRepository.delete(id);
  }
}
