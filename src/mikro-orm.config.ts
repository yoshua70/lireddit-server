import { Options } from "@mikro-orm/core";
import path from "path";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";

const config: Options = {
  migrations: {
    tableName: "mikro_orm_migrations", // name of database table with log of executed transactions
    path: path.join(__dirname, "./migrations"),
    glob: "!(*.d).{js,ts}",
  },
  entities: [Post],
  dbName: "lireddit",
  type: "postgresql",
  user: "michee",
  password: "michee@admin",
  debug: !__prod__,
  allowGlobalContext: true,
};

export default config;
