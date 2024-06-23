import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ColumnDtos } from 'src/dtos';
import { ColumnEntity } from 'src/entities/column.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ColumnsService {
  constructor(
    @InjectRepository(ColumnEntity)
    private columnsRepository: Repository<ColumnEntity>,
  ) {}

  public async create(body: ColumnDtos.ColumnCreationDto): Promise<ColumnEntity> {
    const column = this.columnsRepository.create(body)

    await this.columnsRepository
    .createQueryBuilder()
    .insert()
    .into("columns")
    .values(column)
    .execute()

    return column
  }
}
