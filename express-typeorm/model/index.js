import "dotenv/config.js";

import UserEntity from "./entities/user.entity.js";
import AppDataSource from "./datasource.js";
import { randomInt } from "crypto";

export class UserStorage {
  constructor(datasource) {
    this.ds = datasource;
  }

  async getUsers() {
    return this.ds.manager.query("select * from users");
  }

  async getUserById(id) {
    return this.ds.manager.findOne(UserEntity, {
      where: {
        id,
      },
    });
  }

  async createUser(body) {
    const user = await this.ds.manager.create(UserEntity, {
      id: randomInt(1000),
      username: body
    });
    console.log(user)
    return this.ds.manager.insert(UserEntity, user);
  }

  async updateUser(body) {
    return this.ds
      .createQueryBuilder()
      .update(UserEntity)
      .set({ id: body.newId, username: body.username })
      .where("id = :id", { id: body.id })
      .execute();
  }

  async deleteUser(id) {
    return this.ds.manager.delete(UserEntity, id);
  }
}


const model = new UserStorage(AppDataSource)

export default model