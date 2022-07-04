'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('ToDoLists',
    [
      {
        task: 'Tarefa 1',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        in_progress: true,
      },
      {
        task: 'Tarefa 2',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        in_progress: true,
      },
      {
        task: 'Tarefa 3',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        in_progress: true,
      },
      {
        task: 'Tarefa 4',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        in_progress: true,
      },
      {
        task: 'Tarefa 5',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        in_progress: true,
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};