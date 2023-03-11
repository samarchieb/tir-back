import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FormulaireService } from './formulaire.service';
import { CreateFormulaireDto } from './dto/create-formulaire.dto';
import { UpdateFormulaireDto } from './dto/update-formulaire.dto';

@Controller('formulaire')
export class FormulaireController {
  constructor(private readonly formulaireService: FormulaireService) {}

  @Post('addformulaire')
  create(@Body() createFormulaireDto: CreateFormulaireDto) {
    return this.formulaireService.create(createFormulaireDto);
  }

  @Get('all')
  findAll() {
    return this.formulaireService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.formulaireService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFormulaireDto: UpdateFormulaireDto) {
    return this.formulaireService.update(+id, updateFormulaireDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.formulaireService.remove(+id);
  }
}
