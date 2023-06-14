import { Team } from './team.entity';
import { TEAM_REPOSITORY } from '../../core/constants';

export const teamProviders = [
  {
    provide: TEAM_REPOSITORY,
    useValue: Team,
  },
];
