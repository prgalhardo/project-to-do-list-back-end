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
const to_do_list_1 = __importDefault(require("../services/to-do-list"));
class ToDoListController {
    constructor(toDoListService = new to_do_list_1.default()) {
        this.toDoListService = toDoListService;
        this.findAll = (_req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const list = yield this.toDoListService.findAll();
                return res.status(200).json(list);
            }
            catch (error) {
                next(error);
            }
        });
        this.create = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const newTask = yield this.toDoListService.create(req.body);
                return res.status(201).json(newTask);
            }
            catch (error) {
                next(error);
            }
        });
        this.update = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { task, createdAt, inProgress } = req.body;
                yield this.toDoListService.update(id, task, createdAt, inProgress);
                return res.status(200).json({ message: 'Updated task' });
            }
            catch (error) {
                next(error);
            }
        });
        this.delete = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield this.toDoListService.delete(id);
                return res.status(200).json({ message: 'Deleted task' });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = ToDoListController;
