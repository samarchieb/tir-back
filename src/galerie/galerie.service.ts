import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGalerieDto } from './dto/create-galerie.dto';
import { UpdateGalerieDto } from './dto/update-galerie.dto';
import { Galerie } from './entities/galerie.entity';

@Injectable()
export class GalerieService {
  constructor(@InjectRepository(Galerie) private galerieRepository: Repository<Galerie>){}
  create(createGalerieDto: CreateGalerieDto) {
    return this.galerieRepository.save(createGalerieDto);
  }

  findAll() {
    return this.galerieRepository.find();
  }

  findOne(id: number) : Promise<Galerie> {
    return  this.galerieRepository.findOne({
      where: {
        id,
      }
    });
  }

  async update(id: number, updateGalerieDto: UpdateGalerieDto) {
    await   this.galerieRepository.update(id,updateGalerieDto)
  }

  async remove(id: number) {
   await  this.galerieRepository.delete(id);
  }
}
