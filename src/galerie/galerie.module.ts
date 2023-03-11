import { Module } from '@nestjs/common';
import { GalerieService } from './galerie.service';
import { GalerieController } from './galerie.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Calendrier } from 'src/calendrier/entities/calendrier.entity';
import { Galerie } from './entities/galerie.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Galerie])],

  controllers: [GalerieController],
  providers: [GalerieService]
})
export class GalerieModule {}
