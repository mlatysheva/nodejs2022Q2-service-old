import { Module } from '@nestjs/common';
import { AlbumsModule } from './modules/albums/albums.module';
import { ArtistsModule } from './modules/artists/artists.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [UsersModule, ArtistsModule, AlbumsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
