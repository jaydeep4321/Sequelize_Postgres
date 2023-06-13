import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Player } from '../player/player.entity';

@Table
export class Team extends Model {
  @Column
  name: string;

  @HasMany(() => Player)
  players: Player[];
}
