module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'songs',
      'track',
      Sequelize.STRING
    )
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn(
      'songs',
      'track'
    )
  }
};
