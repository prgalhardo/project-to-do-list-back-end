import { Request, Response, NextFunction } from 'express';
import ToDoListService from '../services/to-do-list';

class ToDoListController {
  constructor(private toDoListService = new ToDoListService()) { }

  public findAll = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const list = await this.toDoListService.findAll();
      return res.status(200).json(list);
    } catch (error) {
      next(error);
    }
  }

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const newTask = await this.toDoListService.create(req.body);
      return res.status(201).json(newTask);
    } catch (error) {
      next(error);
    }
  };

  public update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const { task, createdAt, inProgress } = req.body;
      await this.toDoListService.update(id, task, createdAt, inProgress);
      return res.status(200).json({ message: 'Updated task' });
    } catch (error) {
      next(error);
    }
  };

  public delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      await this.toDoListService.delete(id);
      return res.status(200).json({ message: 'Deleted task' });
    } catch (error) {
      next(error);
    }
  }
}

export default ToDoListController;
