'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('admin_users', [
      {
        id: 1,
        name: 'Hiroshi Okano',
        email: 'hiroshi.okano@mixreward.com',
        password: bcrypt.hashSync('hiroshi', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'Kelvin Chu',
        email: 'kelvin.chu@mixreward.com',
        password: bcrypt.hashSync('kelvin', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: 'Simson Wong',
        email: 'simson.wong@blue.com.hk',
        password: bcrypt.hashSync('simson20201202', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: 'Kitty Pang',
        email: 'kitty.pang@blue.com.hk',
        password: bcrypt.hashSync('kitty12022020', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        name: 'Rankine Lo',
        email: 'rankine.lo@blue.com.hk',
        password: bcrypt.hashSync('20201202rankine', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('admin_users', null, {});
  }
};
