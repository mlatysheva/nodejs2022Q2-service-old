import { IsNumber, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class AlbumModel {
  @ApiProperty({ type: String })
  id?: string;

  @ApiProperty({ type: String })
  @IsString()
  name: string;

  @ApiProperty({ type: Number })
  @IsNumber()
  year: number;

  @ApiPropertyOptional({ type: String })
  @IsString()
  artistId: string | null;
}
