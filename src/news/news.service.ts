import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { News } from './entities/news.entity';

@Injectable()
export class NewsService {
  constructor(@InjectRepository(News) private newsRepository: Repository<News>){}

  create(createNewsDto: CreateNewsDto) {
    return this.newsRepository.save(createNewsDto);
  }

  findAll() {
    return  this.newsRepository.find();
  }

  findOne(id: number) : Promise<News>{
    return this.newsRepository.findOne({
      where : {
        id,
      }
    });
  }

 async update(id: number, updateNewsDto: UpdateNewsDto) {
await this.newsRepository.update(id,updateNewsDto);
}
 
 async remove(id: number) {
  await this.newsRepository.delete(id); 
  }
}
