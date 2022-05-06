"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const constants_1 = require("./constants");
const Post_1 = require("./entities/Post");
const config = {
    migrations: {
        tableName: "mikro_orm_migrations",
        path: path_1.default.join(__dirname, "./migrations"),
        glob: "!(*.d).{js,ts}",
    },
    entities: [Post_1.Post],
    dbName: "lireddit",
    type: "postgresql",
    user: "michee",
    password: "michee@admin",
    debug: !constants_1.__prod__,
    allowGlobalContext: true,
};
exports.default = config;
//# sourceMappingURL=mikro-orm.config.js.map