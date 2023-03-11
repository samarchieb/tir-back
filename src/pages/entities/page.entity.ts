import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("page")
export class Page {


@PrimaryGeneratedColumn()
id:number;

@Column()
name:string;


@Column()
title:string;


@Column({ length:9000 })
description:string;
@Column()
image: string;
}
