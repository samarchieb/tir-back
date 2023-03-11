import { Module } from '@nestjs/common';
import { ChampionnatService } from './championnat.service';
import { ChampionnatController } from './championnat.controller';

@Module({
  controllers: [ChampionnatController],
  providers: [ChampionnatService]
})
export class ChampionnatModule {}
