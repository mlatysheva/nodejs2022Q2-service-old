import { PartialType } from '@nestjs/mapped-types';
import { CreateAlbumDto } from './create-album.dto';
import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateAlbumDto extends PartialType(CreateAlbumDto) {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  name: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ type: Number })
  year: number;

  @ApiPropertyOptional({ type: String })
  @IsString()
  @IsOptional()
  artistId: string | null;
}
