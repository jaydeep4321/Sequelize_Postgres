import { Inject, Injectable } from '@nestjs/common';
import { Team } from './team.entity';
import { TeamDto } from './dto/team.dto';
import { TEAM_REPOSITORY } from 'src/core/constants';
import { BookAuthor } from '../book-author/book-author.entity';
import { Player } from '../player/player.entity';

@Injectable()
export class TeamService {
  constructor(@Inject(TEAM_REPOSITORY) private readonly repo: typeof Team) {}

  async create(team: TeamDto): Promise<Team> {
    return await this.repo.create(team);
  }

  async findAll(): Promise<Team[]> {
    return await this.repo.findAll<Team>({
      include: [
        {
          model: Player,
          attributes: { exclude: ['teamId'] },
        },
      ],
    });
  }
}
