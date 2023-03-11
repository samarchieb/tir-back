import { Injectable } from '@nestjs/common';
import { CreateChampionnatDto } from './dto/create-championnat.dto';
import { UpdateChampionnatDto } from './dto/update-championnat.dto';

@Injectable()
export class ChampionnatService {
  create(createChampionnatDto: CreateChampionnatDto) {
    return 'This action adds a new championnat';
  }

  findAll() {
    return `This action returns all championnat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} championnat`;
  }

  update(id: number, updateChampionnatDto: UpdateChampionnatDto) {
    return `This action updates a #${id} championnat`;
  }

  remove(id: number) {
    return `This action removes a #${id} championnat`;
  }
}
