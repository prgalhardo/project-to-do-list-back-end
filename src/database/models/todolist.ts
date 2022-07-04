import { Model, DataTypes } from 'sequelize';
import connection from '.';
// import { Model, DataTypes } from 'sequelize';
// import connection from '.';
// import Team from './teams';

// class Match extends Model {
//   public id: number;
//   public homeTeam: number;
//   public homeTeamGoals: number;
//   public awayTeam: number;
//   public awayTeamGoals: number;
//   public inProgress: boolean;
//   public teamHome: {
//     teamName: string;
//   };

//   public teamAway: {
//     teamName: string;
//   };
// }
// Match.init({
//   homeTeam: DataTypes.NUMBER,
//   homeTeamGoals: DataTypes.NUMBER,
//   awayTeam: DataTypes.NUMBER,
//   awayTeamGoals: DataTypes.NUMBER,
//   inProgress: DataTypes.BOOLEAN,
// }, {
//   sequelize: connection,
//   underscored: true,
//   timestamps: false,
// });