import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateArtistDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  grammy: boolean;
}
