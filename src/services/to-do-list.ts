import ToDoList from '../database/models/todolist';
import IToDoList from '../interfaces/to-do-list-interface';

class ToDoListService {
  public findAll = async (): Promise<IToDoList[]> => {
    const list = await ToDoList.findAll();
    return list;
  }

  public create = async ({ task, createdAt, inProgress }:
    ToDoList): Promise<IToDoList> => {
      const newTask = await ToDoList.create({
        task, createdAt, inProgress
      });
  
      return newTask;
    };
  
  public update = async (
    id: number,
    task: string,
    createdAt: string,
    inProgress: boolean,
  ): Promise<ToDoList | null> => {
    const findTaskById = await ToDoList.findOne({ where: { id } });
    if (findTaskById === null ) throw new Error('Task not found');
    await ToDoList.update({ task, createdAt, inProgress }, { where: { id } });
    return findTaskById;
  };

  public delete = async (id: number) : Promise<void | null> => {
    const deleteTask = await ToDoList.destroy({ where: { id: id } });
    if (deleteTask === null) throw new Error('Task not found');
  }
}

export default ToDoListService;
