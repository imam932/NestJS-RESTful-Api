import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { promises } from 'fs';
import { Heroe } from './../heroe.entity';
import { HeroesService } from './heroes.service';
import { identifier } from '@babel/types';

@Controller('heroes')
export class HeroesController {
    constructor(private heroesService : HeroesService){}

    @Get()
    index(): Promise<Heroe[]> {
        return this.heroesService.findAll();
    }

    @Post()
    async create(@Body() heroeData: Heroe): Promise<any> {
        return this.heroesService.create(heroeData);
    }

    @Put(':id/update')
    async update(@Param('id') id, @Body() heroeData: Heroe): Promise<any> {
        heroeData.id = Number(id);
        console.log('Update => '+ heroeData.id);        
        return this.heroesService.update(heroeData);
    }

    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
        return this.heroesService.delete(id);
    }
}
