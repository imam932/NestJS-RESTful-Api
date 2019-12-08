import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { promises } from 'fs';
import { Heroe } from './../heroe.entity';
import { HeroesService } from './heroes.service';

@Controller('heroes')
export class HeroesController {
    constructor(private heroesService : HeroesService){}

    @Get()
    index(): Promise<Heroe[]> {
        return this.heroesService.findAll();
    }
}
