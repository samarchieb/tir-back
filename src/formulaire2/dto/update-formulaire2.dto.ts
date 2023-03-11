import { PartialType } from '@nestjs/mapped-types';
import { CreateFormulaire2Dto } from './create-formulaire2.dto';

export class UpdateFormulaire2Dto extends PartialType(CreateFormulaire2Dto) {
   
    nomprenom:string;
    numlicence:string;
    club:string;
    discipline:string;
    tour:string;
}
