import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './entities/event.entity';

@Injectable()
export class EventService {
  constructor(@InjectRepository(Event) private eventRepository: Repository<Event>){}

  create(createEventDto: CreateEventDto) {
    return this.eventRepository.save(createEventDto);
  }

  findAll() {
    return this.eventRepository.find();
  }

  findOne(id: number) : Promise<Event> {
    return  this.eventRepository.findOne({
      where: {
        id,
      }
    });
  }
 
  async  update(id: number, updateEventDto: UpdateEventDto) {
    await this.eventRepository.update(id,updateEventDto)
  }
 
  async remove(id: number) {
   await this.eventRepository.delete(id);
  }
}
