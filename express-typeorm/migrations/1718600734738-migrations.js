//const { MigrationInterface, QueryRunner } = require("typeorm");

class Migrations1718600734738 {
  async up(queryRunner) {
    await queryRunner.query(`
        create table if not exists users (
            id integer not null primary key,
            username varchar(255) not null
        );
    `);
  }

  async down(queryRunner) {}
};

export default Migrations1718600734738