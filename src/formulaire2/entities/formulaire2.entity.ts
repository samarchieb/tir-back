import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
@Entity("formulaire2")
export class Formulaire2 {
    @PrimaryGeneratedColumn()
    id:number;
    
    @Column()
    nomprenom:string;

    @Column()
    numlicence:string;

    @Column()
    club:string;

    @Column()
    discipline:string;

    @Column()
    tour:string;
    
}
