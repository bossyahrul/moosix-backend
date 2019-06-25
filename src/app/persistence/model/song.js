module.exports = (sequelize, DataTypes) => {
  const song = sequelize.define('song', {
    name: DataTypes.STRING,
    artist: DataTypes.STRING,
    album: DataTypes.STRING,
    url: DataTypes.STRING,
    artwork: DataTypes.STRING
  }, {});
  // eslint-disable-next-line func-names
  song.associate = function () {
  };
  return song;
}
