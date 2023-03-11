import { PartialType } from '@nestjs/mapped-types';
import { Column } from 'typeorm';
import { CreatePageDto } from './create-page.dto';

export class UpdatePageDto extends PartialType(CreatePageDto) {

name:string;


title:string;



description:string;
image: string;
}
