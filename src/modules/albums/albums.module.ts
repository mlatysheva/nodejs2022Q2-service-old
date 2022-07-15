import { Module, forwardRef } from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { AlbumsController } from './albums.controller';
import { TracksService } from '../tracks/tracks.service';
import { ArtistsService } from '../artists/artists.service';
import { TracksModule } from '../tracks/tracks.module';
import { ArtistsModule } from '../artists/artists.module';

@Module({
  controllers: [AlbumsController],
  imports: [
    forwardRef(() => TracksModule),
    forwardRef(() => ArtistsModule),
    // forwardRef(() => FavouritesModule)
  ],
  providers: [AlbumsService, TracksService, ArtistsService],
  exports: [AlbumsService],
})
export class AlbumsModule {}
