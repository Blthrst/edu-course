import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { UseGuards } from '@nestjs/common';

import { AuthGuard } from 'src/auth/auth.guard';
import { UserObject } from 'src/auth/user-info';
import { ProjectsService } from './projects.service';
import { ColumnDtos, ProjectDtos, TaskDtos, UserObjectDto } from 'src/dtos';
import { ColumnsService } from 'src/columns/columns.service';
import { TasksService } from 'src/tasks/tasks.service';

@Controller('projects')
export class ProjectsController {
  constructor(
    private projectsService: ProjectsService,
    private columnsService: ColumnsService,
    private tasksService: TasksService,
  ) {}

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
    return await this.projectsService.getEntire(user.id, id);
  }

  @UseGuards(AuthGuard)
  @Post('/new')
  public async create(@Body() body: ProjectDtos.ProjectCreationDto) {
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
  public async update(@Body() body: ProjectDtos.ProjectEditionDto) {
    return await this.projectsService.update(body);
  }

  @UseGuards(AuthGuard)
  @Get('/:id/columns')
  public async getColumns(@Param('id') id: number) {
    return await this.columnsService.findAll(id);
  }

  @UseGuards(AuthGuard)
  @Post('/:id/columns/new')
  public async createColumn(@Body() body: ColumnDtos.ColumnCreationDto) {
    return await this.columnsService.create(body);
  }

  @UseGuards(AuthGuard)
  @Put('/:id/columns/update')
  public async updateColumn(@Body() body: ColumnDtos.ColumnEditionDto) {
    return await this.columnsService.update(body);
  }

  @UseGuards(AuthGuard)
  @Delete('/:id/columns/:columnId')
  public async deleteColumn(@Param('columnId') id: number) {
    return await this.columnsService.delete(id);
  }

  @UseGuards(AuthGuard)
  @Get('/:id/tasks/')
  public async getTasks(@Param('id') id: number) {
    return await this.tasksService.findAll(id);
  }

  @UseGuards(AuthGuard)
  @Get('/:id/tasks/:taskId')
  public async getTask(
    @Param('id') id: number,
    @Param('taskId') taskId: number,
  ) {
    return await this.tasksService.findById(id, taskId);
  }

  @UseGuards(AuthGuard)
  @Post('/:id/tasks/')
  public async createTask(@Body() body: TaskDtos.TaskCreationDto) {
    return await this.tasksService.create(body);
  }

  @UseGuards(AuthGuard)
  @Put('/:id/tasks/')
  public async updateTask(@Body() body: TaskDtos.TaskEditionDto) {
    return await this.tasksService.update(body);
  }

  @UseGuards(AuthGuard)
  @Delete('/:id/tasks/:taskId')
  public async deleteTask(@Param('taskId') id: number) {
    return await this.tasksService.delete(id);
  }
}
