import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalendrierModule } from './calendrier/calendrier.module';
import { ChampionnatModule } from './championnat/championnat.module';
import { PagesModule } from './pages/pages.module';
import { EventModule } from './event/event.module';
import { FormulaireModule } from './formulaire/formulaire.module';
import { GalerieModule } from './galerie/galerie.module';
import { NewsModule } from './news/news.module';
import { Formulaire2Module } from './formulaire2/formulaire2.module';

@Module({
  imports: [    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3307,
    username: 'root',
    password: '',
    database: 'federationtir',
    entities: ['dist/**/*.entity{.ts,.js}'],
    logging: true,
    synchronize: true,
    autoLoadEntities: true,
  }),PagesModule, ChampionnatModule, CalendrierModule, EventModule, FormulaireModule, GalerieModule, NewsModule, Formulaire2Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
