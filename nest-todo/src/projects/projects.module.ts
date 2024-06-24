import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { ProjectEntity } from 'src/entities/project.entity';
import { ColumnsModule } from 'src/columns/columns.module';
import { ColumnEntity } from 'src/entities/column.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectEntity, ColumnEntity]), ColumnsModule],
  providers: [ProjectsService],
  controllers: [ProjectsController],
  exports: [ProjectsService]
})
export class ProjectsModule {}
