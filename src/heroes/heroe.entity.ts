import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Heroe {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    mana: number;
}