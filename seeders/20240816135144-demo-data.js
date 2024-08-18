'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      { username: 'Ana Paula', cpf: '123.456.789-01', email: 'ana.paula@example.com', phone: '(11) 91234-5678', password: 'senhaSegura1', address: 'Rua das Flores, 123', district: 'Centro', city: 'São Paulo', complemente: 'Apto 45', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },

      { username: 'Bruno Henrique', cpf: '234.567.890-12', email: 'bruno.henrique@example.com', phone: '(21) 99876-5432', password: 'senhaSegura2', address: 'Avenida Brasil, 456', district: 'Copacabana', city: 'Rio de Janeiro', complemente: 'Casa 1', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },

      { username: 'Carla Silva', cpf: '345.678.901-23', email: 'carla.silva@example.com', phone: '(31) 98765-4321', password: 'senhaSegura3', address: 'Rua Minas Gerais, 789', district: 'Savassi', city: 'Belo Horizonte', complemente: 'Apto 101', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },

      { username: 'Diego Souza', cpf: '456.789.012-34', email: 'diego.souza@example.com', phone: '(41) 97654-3210', password: 'senhaSegura4', address: 'Rua Curitiba, 101', district: 'Centro Cívico', city: 'Curitiba', complemente: 'Bloco B, Sala 12', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },

      { username: 'Fernanda Costa', cpf: '567.890.123-45', email: 'fernanda.costa@example.com', phone: '(51) 96543-2109', password: 'senhaSegura5', address: 'Avenida Ipiranga, 202', district: 'Centro Histórico', city: 'Porto Alegre', complemente: 'Cobertura 5', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },

    ], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Users', null, {});

  }
};
