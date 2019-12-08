import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Heroe } from './../heroe.entity';

@Injectable()
export class HeroesService {
    constructor(
        @InjectRepository(Heroe)
        private heroeRepository: Repository<Heroe>,
    ) { }

    async findAll(): Promise<Heroe[]> {
        return await this.heroeRepository.find();
    }

    async create(heroe: Heroe): Promise<Heroe> {
        return await this.heroeRepository.save(heroe);
    }

    async update(heroe: Heroe): Promise<UpdateResult> {
        return await this.heroeRepository.update(heroe.id, heroe);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.heroeRepository.delete(id);
    }
}
