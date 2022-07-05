"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todolist_1 = __importDefault(require("../database/models/todolist"));
class ToDoListService {
    constructor() {
        this.findAll = () => __awaiter(this, void 0, void 0, function* () {
            const list = yield todolist_1.default.findAll();
            console.log(list);
            return list;
        });
        this.create = ({ task, taskStatus }) => __awaiter(this, void 0, void 0, function* () {
            const newTask = yield todolist_1.default.create({
                task, taskStatus
            });
            return newTask;
        });
        this.update = (id, task, taskStatus) => __awaiter(this, void 0, void 0, function* () {
            const findTaskById = yield todolist_1.default.findOne({ where: { id } });
            if (findTaskById === null)
                throw new Error('Task not found');
            yield todolist_1.default.update({ task, taskStatus }, { where: { id } });
            return findTaskById;
        });
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            const deleteTask = yield todolist_1.default.destroy({ where: { id } });
            if (deleteTask === null)
                throw new Error('Task not found');
        });
    }
}
exports.default = ToDoListService;
