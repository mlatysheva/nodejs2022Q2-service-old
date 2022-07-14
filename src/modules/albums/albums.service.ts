import { Injectable, Logger } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { v4 as uuid } from 'uuid';
import { AlbumModel } from './entities/album.entity';

@Injectable()
export class AlbumsService {
  private albums: Array<AlbumModel> = [];
  private logger = new Logger(AlbumsService.name);

  public findAll(): Array<AlbumModel> {
    this.logger.log('Getting all Albums');
    return this.albums;
  }

  public findOne(id: string): AlbumModel {
    const Album: AlbumModel = this.albums.find((Album) => Album.id === id);
    this.logger.log('Getting the Album by id');
    return Album;
  }

  public create(Album: CreateAlbumDto): AlbumModel {
    const newAlbum: AlbumModel = {
      ...Album,
      id: uuid(),
    };
    this.logger.log(newAlbum);
    this.albums.push(newAlbum);
    this.logger.log('Creating an Album');
    this.logger.log(`album with id ${newAlbum.id} created`);
    return newAlbum;
  }

  public update(id: string, updatedAlbum: UpdateAlbumDto): AlbumModel {
    const Album: AlbumModel = this.albums.find((Album) => Album.id === id);
    const index: number = this.albums.indexOf(Album);
    this.albums[index] = {
      ...Album,
      ...updatedAlbum,
    };
    this.logger.log('Updating the Album');
    // this.Albums[index] = Object.assign(Album, updatedAlbum);
    // this.Albums[index] = {
    //   id,
    //   name: updatedAlbum.name || this.Albums[index].name,
    //   grammy: updatedAlbum.grammy || this.Albums[index].grammy,
    // };
    return this.albums[index];
  }

  public delete(id: string): void {
    const index: number = this.albums.findIndex((Album) => Album.id === id);
    this.logger.log('Deleting the Album');
    this.albums.splice(index, 1);
  }
}
