import { Module } from '@nestjs/common';
import { FormulaireService } from './formulaire.service';
import { FormulaireController } from './formulaire.controller';
import { Formulaire } from './entities/formulaire.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Formulaire])],
  controllers: [FormulaireController],
  providers: [FormulaireService]
})
export class FormulaireModule {}
