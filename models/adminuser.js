'use strict';
module.exports = (sequelize, DataTypes) => {
  const AdminUser = sequelize.define('AdminUser', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    tableName: 'admin_users'
  });
  AdminUser.associate = function(models) {
    // associations can be defined here
  };
  return AdminUser;
};