module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('songs', 'track', Sequelize.INTEGER)
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('songs', 'track', Sequelize.STRING)
  }
};
