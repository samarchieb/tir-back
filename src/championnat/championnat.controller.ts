import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChampionnatService } from './championnat.service';
import { CreateChampionnatDto } from './dto/create-championnat.dto';
import { UpdateChampionnatDto } from './dto/update-championnat.dto';

@Controller('championnat')
export class ChampionnatController {
  constructor(private readonly championnatService: ChampionnatService) {}

  @Post()
  create(@Body() createChampionnatDto: CreateChampionnatDto) {
    return this.championnatService.create(createChampionnatDto);
  }

  @Get()
  findAll() {
    return this.championnatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.championnatService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChampionnatDto: UpdateChampionnatDto) {
    return this.championnatService.update(+id, updateChampionnatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.championnatService.remove(+id);
  }
}
