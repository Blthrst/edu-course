import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';
import { TasksModule } from './tasks/tasks.module';
import { ColumnsService } from './columns/columns.service';
import { ColumnsModule } from './columns/columns.module';

import options from './options';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot(options),
    UsersModule,
    ProjectsModule,
    TasksModule,
    ColumnsModule,
  ],
})
export class AppModule {}
