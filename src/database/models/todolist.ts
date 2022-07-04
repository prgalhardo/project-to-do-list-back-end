import { Model, DataTypes } from 'sequelize';
import connection from '.';

class ToDoList extends Model {
  public id: number;
  public task: string;
  public createdAt: string;
  public inProgress: boolean;

}

ToDoList.init({
  task: DataTypes.STRING,
  createdAt: DataTypes.STRING,
  inProgress: DataTypes.BOOLEAN,
}, {
  sequelize: connection,
  underscored: true,
  timestamps: false,
});

export default ToDoList;