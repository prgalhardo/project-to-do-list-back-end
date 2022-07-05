import ToDoList from '../database/models/todolist';
import IToDoList from '../interfaces/to-do-list-interface';

class ToDoListService {
  public findAll = async (): Promise<ToDoList[]> => {
    const list = await ToDoList.findAll();
    console.log(list);
    return list;
  }

  public create = async ({ task, taskStatus }:
    ToDoList): Promise<IToDoList> => {
      const newTask = await ToDoList.create({
        task, taskStatus
      });
  
      return newTask;
    };
  
  public update = async (
    id: string,
    task: string,
    taskStatus: boolean,
  ): Promise<ToDoList | null> => {
    const findTaskById = await ToDoList.findOne({ where: { id } });
    if (findTaskById === null ) throw new Error('Task not found');
    await ToDoList.update({ task, taskStatus }, { where: { id } });
    return findTaskById;
  };

  public delete = async (id: string) : Promise<void | null> => {
    const deleteTask = await ToDoList.destroy({ where: { id } });
    if (deleteTask === null) throw new Error('Task not found');
  }
}

export default ToDoListService;
