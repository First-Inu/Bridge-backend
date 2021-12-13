'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    yob: DataTypes.INTEGER,
    gender: DataTypes.STRING,
  }, {
    tableName: 'users'
  });
  User.associate = function(models) {
    User.hasMany(models.EmedicalCard, {foreignKey: 'user_id'})
  };
  return User;
};