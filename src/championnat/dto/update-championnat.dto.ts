import { PartialType } from '@nestjs/mapped-types';
import { CreateChampionnatDto } from './create-championnat.dto';

export class UpdateChampionnatDto extends PartialType(CreateChampionnatDto) {}
