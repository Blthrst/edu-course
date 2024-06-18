import { DataSource } from "typeorm";
import "dotenv/config.js";

import UserEntity from "./entities/user.entity.js";

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  username: process.env.PG_USER,
  password: process.env.PG_PWD,
  database: process.env.PG_NAME,
  entities: [UserEntity],
  migrations: ["../migrations/*.js"]
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

export default AppDataSource