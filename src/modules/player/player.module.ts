import { Module } from '@nestjs/common';
import { PlayerService } from './player.service';
import { PlayerController } from './player.controller';
import { playerProviders } from './player.providers';

@Module({
  providers: [PlayerService, ...playerProviders],
  controllers: [PlayerController],
})
export class PlayerModule {}
