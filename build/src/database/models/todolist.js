"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class ToDoList extends sequelize_1.Model {
}
ToDoList.init({
    task: sequelize_1.DataTypes.STRING,
    createdAt: sequelize_1.DataTypes.STRING,
    inProgress: sequelize_1.DataTypes.BOOLEAN,
}, {
    sequelize: _1.default,
    underscored: true,
    timestamps: false,
});
exports.default = ToDoList;
