import { Injectable, Logger } from '@nestjs/common';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { v4 as uuid } from 'uuid';
import { TrackModel } from './entities/track.entity';

@Injectable()
export class TracksService {
  private tracks: Array<TrackModel> = [];
  private logger = new Logger(TracksService.name);

  public findAll(): Array<TrackModel> {
    this.logger.log('Getting all tracks');
    return this.tracks;
  }

  public findOne(id: string): TrackModel {
    const Track: TrackModel = this.tracks.find((Track) => Track.id === id);
    this.logger.log('Getting the track by id');
    return Track;
  }

  public create(track: CreateTrackDto): TrackModel {
    const newTrack: TrackModel = {
      ...track,
      id: uuid(),
    };
    this.tracks.push(newTrack);
    this.logger.log(`Track with id ${newTrack.id} created`);
    return newTrack;
  }

  public update(id: string, updatedTrack: UpdateTrackDto): TrackModel {
    const track: TrackModel = this.tracks.find((Track) => Track.id === id);
    const index: number = this.tracks.indexOf(track);
    this.tracks[index] = {
      ...track,
      ...updatedTrack,
    };
    this.logger.log('Updating the track');
    // this.tracks[index] = Object.assign(Track, updatedTrack);
    // this.tracks[index] = {
    //   id,
    //   name: updatedTrack.name || this.Tracks[index].name,
    //   grammy: updatedTrack.grammy || this.Tracks[index].grammy,
    // };
    return this.tracks[index];
  }

  public delete(id: string): void {
    const index: number = this.tracks.findIndex((Track) => Track.id === id);
    this.logger.log('Deleting the track');
    this.tracks.splice(index, 1);
  }
}
