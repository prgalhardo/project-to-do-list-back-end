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
    createdAt: sequelize_1.DataTypes.DATEONLY,
    updatedAt: sequelize_1.DataTypes.DATEONLY,
    taskStatus: sequelize_1.DataTypes.STRING,
}, {
    sequelize: _1.default,
    underscored: true,
    tableName: 'tasksList',
    modelName: 'tasksList'
});
exports.default = ToDoList;
