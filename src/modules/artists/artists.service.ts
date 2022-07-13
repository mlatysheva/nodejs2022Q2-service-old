import { Injectable } from '@nestjs/common';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { v4 as uuid } from 'uuid';
import { ArtistModel } from './artists.interface';
import { NotFoundException, UnprocessableEntityException, HttpException, HttpStatus } from '@nestjs/common';
@Injectable()
export class ArtistsService {
  private artists: Array<ArtistModel> = [];

  public findAll(): Array<ArtistModel> {
    return this.artists;
  }

  public findOne(id: string): ArtistModel {
    const artist: ArtistModel = this.artists.find(artist => artist.id === id);
    // if (!artist) {
    //   throw new HttpException(
    //     'Artist not found',
    //     HttpStatus.NOT_FOUND,
    //   );
    // }
    return artist;
  }

  public create(artist: CreateArtistDto): ArtistModel {

    const nameExists: boolean = this.artists.some((item: ArtistModel) => item.name === artist.name);
    // if (nameExists) {
    //   throw new HttpException ('Artist name already exists', HttpStatus.UNPROCESSABLE_ENTITY);
    // }

    const newArtist: ArtistModel = {
      ...artist,
      id: uuid(),
    };

    this.artists.push(newArtist);
    return newArtist;
  }

  public update(id: string, updatedArtist: UpdateArtistDto): ArtistModel {
    const artist: ArtistModel = this.artists.find(artist => artist.id === id);
    // if (!artist) {
    //   throw new HttpException(
    //     'Artist not found',
    //     HttpStatus.BAD_REQUEST,
    //   )
    // };
    const index: number = this.artists.indexOf(artist);
    this.artists[index] = {
      ...artist,
      ...updatedArtist,
    };
    return this.artists[index];    
  }

  public delete(id: string) {
    const index: number = this.artists.findIndex(artist => artist.id === id);
    // if (index === -1) {
    //   throw new HttpException(
    //     'Artist not found',
    //     HttpStatus.BAD_REQUEST,
    //   )
    // }
    this.artists.splice(index, 1);
  }
}
