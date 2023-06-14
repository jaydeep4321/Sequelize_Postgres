import { Player } from './player.entity';
import { PLAYER_REPOSITORY } from '../../core/constants';

export const playerProviders = [
  {
    provide: PLAYER_REPOSITORY,
    useValue: Player,
  },
];
