import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCalendrierDto } from './dto/create-calendrier.dto';
import { UpdateCalendrierDto } from './dto/update-calendrier.dto';
import { Calendrier } from './entities/calendrier.entity';

@Injectable()
export class CalendrierService {
  constructor(@InjectRepository(Calendrier) private calendrierRepository: Repository<Calendrier>){}

  create(createCalendrierDto: CreateCalendrierDto) {
    return this.calendrierRepository.save(createCalendrierDto);
  }

  findAll() {
    return this.calendrierRepository.find();
  }

  findOne(id: number) : Promise<Calendrier> {
    return  this.calendrierRepository.findOne({
      where: {
        id,
      }
    });
  }


   async update(id: number, updateCalendrierDto: UpdateCalendrierDto) {
    await this.calendrierRepository.update(id,updateCalendrierDto);
  }

 async  remove(id: number) {
    await this.calendrierRepository.delete(id);
  }
}
