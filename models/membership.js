'use strict';
module.exports = (sequelize, DataTypes) => {
  const Membership = sequelize.define('Membership', {
    name: DataTypes.STRING,
    card_back_image: DataTypes.STRING,
    attachments: DataTypes.TEXT,
    email_subject: DataTypes.STRING,
  }, {
    tableName: 'memberships'
  });
  Membership.associate = function(models) {
    Membership.hasMany(models.EmedicalCard, {foreignKey: 'membership_id'})
  };
  return Membership;
};