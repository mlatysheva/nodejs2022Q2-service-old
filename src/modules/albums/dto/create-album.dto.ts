import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { InputType } from '@nestjs/graphql';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

@InputType()
export class CreateAlbumDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  name: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ type: Number })
  year: number;

  @ApiPropertyOptional({ type: String })
  @IsOptional()
  @IsString()
  artistId: string | null;
}
