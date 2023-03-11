import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';
import { Page } from './entities/page.entity';

@Injectable()
export class PagesService {
  constructor(@InjectRepository(Page) private pageRepository: Repository<Page>){}

  create(createPageDto: CreatePageDto) {
    return this.pageRepository.save(createPageDto);
  }

  findAll() {
    return this.pageRepository.find();
  }

  findOne(id: number) : Promise<Page> {
    return this.pageRepository.findOne({
      where: {
        id,
      },
    });
  }





 async  update(id: number, updatePageDto: UpdatePageDto) {
   await this.pageRepository.update(id, updatePageDto);
  }

  async remove(id: number) {
    await this.pageRepository.delete(id);
  }
}
