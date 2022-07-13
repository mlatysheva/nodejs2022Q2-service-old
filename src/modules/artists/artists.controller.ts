import { Controller, Get, Post, Body, Put, Param, Delete, HttpCode, ParseUUIDPipe, HttpException, HttpStatus, ValidationPipe } from '@nestjs/common';
import { uuIdValidateV4 } from '../../utils/uuIdValidate';
import { ArtistModel } from './artists.interface';
import { ArtistsService } from './artists.service';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';

@Controller('artist')
export class ArtistsController {
  constructor(private readonly artistsService: ArtistsService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  public findAll(): Array<ArtistModel> {
    return this.artistsService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  public findOne(@Param('id') id: string): ArtistModel {
    if (!uuIdValidateV4(id)) {
      throw new HttpException('Invalid UUID', HttpStatus.BAD_REQUEST);
    }
    const artist = this.artistsService.findOne(id);
    if (!artist) {
      throw new HttpException('Artist not found', HttpStatus.NOT_FOUND);
    }
    return artist;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  public create(@Body(new ValidationPipe()) createdArtist: CreateArtistDto): ArtistModel {
    return this.artistsService.create(createdArtist);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  public update(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string, @Body(new ValidationPipe()) updatedArtist: UpdateArtistDto) {
    if (!uuIdValidateV4(id)) {
      throw new HttpException('Invalid UUID', HttpStatus.BAD_REQUEST);
    }
    const artist = this.artistsService.findOne(id);
    if (!artist) {
      throw new HttpException('Artist not found', HttpStatus.NOT_FOUND);
    }
    return this.artistsService.update(id, updatedArtist);
  }

  @Delete(':id')
  @HttpCode(201)
  public delete(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string): void {
  }
}
