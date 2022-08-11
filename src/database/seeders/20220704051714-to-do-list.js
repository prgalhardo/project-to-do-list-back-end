'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('tasksList',
    [
      {
        task: 'Tarefa 1',
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        task_status: false,
      },
      {
        task: 'Tarefa 2',
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        task_status: false,
      },
      {
        task: 'Tarefa 3',
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        task_status: true,
      },
      {
        task: 'Tarefa 4',
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        task_status: true,
      },
      {
        task: 'Tarefa 5',
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        task_status: true,
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('tasksList', null, {}),
};