'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tasksList', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      task: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATEONLY,
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATEONLY,
        field: 'updated_at'
      },
      taskStatus: {
        type: Sequelize.STRING,
        field: 'task_status'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tasksList');
  }
};