'use strict';
const { v4: uuidv4 } = require('uuid');
const passwordService = require('../../services/password.service');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users',
    [
      {
        _id: uuidv4(),
        username: 'skrowll',
        email: 'lucasdejesus.rocha@hotmail.com',
        password: passwordService.encryptPassword('Luka$1234'),
        role: 'admin'
      },
      {
        _id: uuidv4(),
        username: 'Convidado',
        email: 'guest@test.com',
        password: passwordService.encryptPassword('@Guest'),
        role: 'guest'
      }
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
