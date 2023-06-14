import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Team } from '../team/team.entity';

@Table
export class Player extends Model<Player> {
  @Column
  name: string;

  @Column
  num: number;

  @ForeignKey(() => Team)
  @Column
  teamId: number;

  @BelongsTo(() => Team)
  team: Team;
}
