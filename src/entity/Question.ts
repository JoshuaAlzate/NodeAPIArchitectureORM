import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('Question')
export class Question {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    answersCount: number;

}
