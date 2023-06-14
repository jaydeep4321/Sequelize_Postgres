import { Module } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamController } from './team.controller';
import { teamProviders } from './team.providers';

@Module({
  providers: [TeamService, ...teamProviders],
  controllers: [TeamController],
})
export class TeamModule {}
