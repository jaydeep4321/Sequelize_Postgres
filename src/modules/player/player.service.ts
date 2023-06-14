import { Inject, Injectable } from '@nestjs/common';
import { PLAYER_REPOSITORY } from 'src/core/constants';
import { PlayerDto } from './dto/player.dto';
import { Player } from './player.entity';
import { Team } from '../team/team.entity';

@Injectable()
export class PlayerService {
  constructor(
    @Inject(PLAYER_REPOSITORY) private readonly repo: typeof Player,
  ) {}

  async create(player: PlayerDto): Promise<Player> {
    return await this.repo.create(player);
  }

  async findAll(): Promise<Player[]> {
    return await this.repo.findAll<Player>({
      include: [
        {
          model: Team,
        },
      ],
    });
  }
}
