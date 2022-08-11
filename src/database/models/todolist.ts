import { Model, DataTypes } from 'sequelize';
import connection from '.';

class ToDoList extends Model {
  public id: number;
  public task: string;
  public taskStatus: string;

}

ToDoList.init({
  task: DataTypes.STRING,
  createdAt: DataTypes.DATEONLY,
  updatedAt: DataTypes.DATEONLY,
  taskStatus: DataTypes.STRING,
}, {
  sequelize: connection,
  underscored: true,
  tableName: 'tasksList',
  modelName: 'tasksList'
});

export default ToDoList;