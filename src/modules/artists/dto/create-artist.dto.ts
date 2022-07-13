import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { InputType } from '@nestjs/graphql';
@InputType()
export class CreateArtistDto {

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  grammy: boolean;
}
