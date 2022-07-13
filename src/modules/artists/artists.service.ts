import { Injectable } from '@nestjs/common';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { v4 as uuid } from 'uuid';
import { ArtistModel } from './artists.interface';

@Injectable()
export class ArtistsService {
  private artists: Array<ArtistModel> = [];

  public findAll(): Array<ArtistModel> {
    return this.artists;
  }

  public findOne(id: string): ArtistModel {
    const artist: ArtistModel = this.artists.find((artist) => artist.id === id);
    return artist;
  }

  public create(artist: CreateArtistDto): ArtistModel {
    const newArtist: ArtistModel = {
      ...artist,
      id: uuid(),
    };

    this.artists.push(newArtist);
    return newArtist;
  }

  public update(id: string, updatedArtist: UpdateArtistDto): ArtistModel {
    const artist: ArtistModel = this.artists.find((artist) => artist.id === id);
    const index: number = this.artists.indexOf(artist);
    this.artists[index] = {
      ...artist,
      ...updatedArtist,
    };
    // this.artists[index] = Object.assign(artist, updatedArtist);
    return this.artists[index];
  }

  public delete(id: string): void {
    const index: number = this.artists.findIndex((artist) => artist.id === id);
    this.artists.splice(index, 1);
  }
}
