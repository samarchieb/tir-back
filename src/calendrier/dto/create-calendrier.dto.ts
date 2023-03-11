import { Column } from "typeorm";

export class CreateCalendrierDto {
    @Column()
annee:number;
@Column()
moins:number;
@Column()
date:Date;

@Column()
title:string;
@Column()
nbtour:number;
@Column()
salle:string;
}
