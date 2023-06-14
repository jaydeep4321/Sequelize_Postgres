import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Player } from '../player/player.entity';
import { TEAM_REPOSITORY } from 'src/core/constants';

@Table
export class Team extends Model<Team> {
  @Column
  name: string;

  @HasMany(() => Player)
  players: Player[];
}
