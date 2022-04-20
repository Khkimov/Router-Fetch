'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Posts', [
       {
         title: 'My day',
         body: 'How I spent my day',
         userID: 2,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
        title: 'My weekend',
        body: 'How I spent my weekend',
        userID: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'What it this?',
        body: 'What do I see',
        userID: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Posts', null, {});
  }
};
