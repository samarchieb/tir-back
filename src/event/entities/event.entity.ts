import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("event")
export class Event {

@PrimaryGeneratedColumn()
id:number;

@Column()
title:string;
@Column()
eventdate: Date;

}
