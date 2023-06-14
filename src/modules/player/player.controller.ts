import { Body, Controller, Get, Post } from '@nestjs/common';
import { PlayerService } from './player.service';
import { PlayerDto } from './dto/player.dto';

@Controller('player')
export class PlayerController {
  constructor(private playerService: PlayerService) {}

  @Post()
  async createBookAuthor(@Body() body: PlayerDto) {
    return this.playerService.create(body);
  }
  @Get()
  findAll() {
    return this.playerService.findAll();
  }
}
