import { Column, Entity, PrimaryColumn } from "typeorm";
@Entity("galerie")
export class Galerie {
@PrimaryColumn()
    id: number;
    @Column()
    photo: string;
    @Column()
    theme:string
    
}
