import { Module } from '@nestjs/common';
import { HeroesService } from './heroes/heroes.service';
import { HeroesController } from './heroes/heroes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Heroe } from './heroe.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Heroe]),
  ],
  providers: [HeroesService],
  controllers: [HeroesController]
})
export class HeroesModule {}
