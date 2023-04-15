import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Put } from '@nestjs/common/decorators';
import { SlackRequest } from 'src/models/slack.request.models';
import { UserService } from 'src/services/user.service';

@Controller('api/slack')
export class SlackController {
  constructor(private userService: UserService) {}

  @Get()
  async getUsers() {
    return await this.userService.findAll();
  }

  @Post()
  async postUser(@Body() request: SlackRequest) {
    return await this.userService.create(request);
  }

  @Put()
  async updateUser(@Body() request: SlackRequest) {
    return await this.userService.update(request);
  }
}
