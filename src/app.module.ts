import { Module } from '@nestjs/common';
import { ArtistsModule } from './modules/artists/artists.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [UsersModule, ArtistsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
