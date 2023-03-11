import { PartialType } from '@nestjs/mapped-types';
import { Column } from 'typeorm';
import { CreateCalendrierDto } from './create-calendrier.dto';

export class UpdateCalendrierDto extends PartialType(CreateCalendrierDto) {
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
