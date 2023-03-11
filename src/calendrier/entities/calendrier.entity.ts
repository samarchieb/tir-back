import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("calendrier")
export class Calendrier {
@PrimaryGeneratedColumn()
id:number;

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
