import { PartialType } from '@nestjs/mapped-types';
import { CreateFormulaireDto } from './create-formulaire.dto';

export class UpdateFormulaireDto extends PartialType(CreateFormulaireDto) {
    image: string;
    name_prenom: string;
    mail: string;
    pays: string;
    num_passport: string;
    code_CIO: string;
    position: string;

}
