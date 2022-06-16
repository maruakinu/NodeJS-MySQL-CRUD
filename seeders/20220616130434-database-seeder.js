'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('posts', [
      {
        FirstName: 'Mark',
        LastName: 'Lameri',
        Address: 'Manila',
        Postcode: 9789,
        ContactNumber: 98971243,
        Email: 'Mark@gmail.com',
        Username: 'Mark',
        Password: 'password'
      },
      {
        FirstName: 'Febbie',
        LastName: 'Garcia',
        Address: 'Lucena',
        Postcode: 9897,
        ContactNumber: 98971276,
        Email: 'febbie@gmail.com',
        Username: 'Febbie',
        Password: 'password'
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('posts', {}, null);
  }
};
