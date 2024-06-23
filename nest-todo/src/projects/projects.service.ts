import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectDtos } from 'src/dtos';

import { ProjectEntity } from 'src/entities/project.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(ProjectEntity)
    private projectsRepository: Repository<ProjectEntity>,
  ) {}

  public async findAll(user_id: string): Promise<ProjectEntity[]> {
    const projs = await this.projectsRepository.findBy({user_id})

    return projs
  }

  public async findById(user_id: string, id: number): Promise<ProjectEntity> {
    const proj = await this.projectsRepository.findOneBy({
        user_id,
        id
    })

    return proj
  }

  public async create(body: ProjectDtos.ProjectCreationDto): Promise<ProjectEntity> {
    const proj = this.projectsRepository.create(body)
    await this.projectsRepository
    .createQueryBuilder()
    .insert()
    .into("projects")
    .values(proj)
    .execute()

    return proj
  }

  public async update(body: ProjectDtos.ProjectEditionDto): Promise<ProjectEntity> {
    await this.projectsRepository
    .createQueryBuilder()
    .update()
    .set(body)
    .where({id: body.id, user_id: body.user_id})
    .execute()

    const proj = await this.findById(body.user_id, body.id)

    return proj
  }

  public async delete(user_id: string, id: number) {
    const result = await this.projectsRepository
    .createQueryBuilder()
    .delete()
    .where({id, user_id})
    .execute()

    return result
  }
}
