import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("formulaire")
export class Formulaire {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    image: string;
    @Column()
    name_prenom: string;
    @Column()
    mail: string;
    @Column()
    pays: string;
    @Column()
    num_passport: string;
    @Column()
    code_CIO: string;
    @Column()
    position: string;

}
