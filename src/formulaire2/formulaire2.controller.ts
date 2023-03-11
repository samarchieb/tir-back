import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Formulaire2Service } from './formulaire2.service';
import { CreateFormulaire2Dto } from './dto/create-formulaire2.dto';
import { UpdateFormulaire2Dto } from './dto/update-formulaire2.dto';

@Controller('formulaire2')
export class Formulaire2Controller {
  constructor(private readonly formulaire2Service: Formulaire2Service) {}

  @Post('addformulaire2')
  create(@Body() createFormulaire2Dto: CreateFormulaire2Dto) {
    return this.formulaire2Service.create(createFormulaire2Dto);
  }

  @Get('all')
  findAll() {
    return this.formulaire2Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.formulaire2Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFormulaire2Dto: UpdateFormulaire2Dto) {
    return this.formulaire2Service.update(+id, updateFormulaire2Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.formulaire2Service.remove(+id);
  }
}
