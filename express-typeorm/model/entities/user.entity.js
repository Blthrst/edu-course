import { EntitySchema } from "typeorm";

const UserEntity = new EntitySchema({
    name: "User",
    tableName: "users",
    columns: {
        id: {
            primary: true,
            type: "int",
        },
        username: {
            type: "varchar",
            nullable: false
        }
    }
})

export default UserEntity