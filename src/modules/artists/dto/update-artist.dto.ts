import { IsString, IsNotEmpty, IsOptional } from 'class-validator';


export class UpdateArtistDto {

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  grammy: boolean;
}
