import "dotenv/config.js";

import UserEntity from "./entities/user.entity.js";
import AppDataSource from "./datasource.js";

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
    const user = await this.ds.manager.create(UserEntity, body);
    return this.ds.manager.save(user);
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