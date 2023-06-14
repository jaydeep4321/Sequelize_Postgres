import { Body, Controller, Get, Post } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamDto } from './dto/team.dto';

@Controller('team')
export class TeamController {
  constructor(private teamService: TeamService) {}

  @Post()
  async createBookAuthor(@Body() body: TeamDto) {
    return this.teamService.create(body);
  }
  @Get()
  findAll() {
    return this.teamService.findAll();
  }
}
