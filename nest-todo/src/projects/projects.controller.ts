import { Controller, Post, Get, Put, Delete, Param, Body } from '@nestjs/common';
import { UseGuards } from '@nestjs/common';

import { AuthGuard } from 'src/auth/auth.guard';
import { UserObject } from 'src/auth/user-info';
import { ProjectsService } from './projects.service';
import { ProjectCreationDto, ProjectEditionDto, UserObjectDto } from 'src/dtos';

@Controller('projects')
export class ProjectsController {
  constructor(private projectsService: ProjectsService) {}

  @UseGuards(AuthGuard)
  @Get('/all')
  public async getAll(@UserObject() user: UserObjectDto) {
    return await this.projectsService.findAll(user.id);
  }

  @UseGuards(AuthGuard)
  @Get('/:id')
  public async getOne(
    @Param('id') id: number,
    @UserObject() user: UserObjectDto,
  ) {
    return await this.projectsService.findById(user.id, id);
  }

  @UseGuards(AuthGuard)
  @Post('/new')
  public async create(@Body() body: ProjectCreationDto) {
    return await this.projectsService.create(body);
  }

  @UseGuards(AuthGuard)
  @Delete('/:id')
  public async delete(
    @Param('id') id: number,
    @UserObject() user: UserObjectDto,
  ) {
    return await this.projectsService.delete(user.id, id);
  }

  @UseGuards(AuthGuard)
  @Put('/update')
  public async update(@Body() body: ProjectEditionDto) {
    return await this.projectsService.update(body)
  }
}
