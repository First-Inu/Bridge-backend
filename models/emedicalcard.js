'use strict';
module.exports = (sequelize, DataTypes) => {
  const EmedicalCard = sequelize.define('EmedicalCard', {
    user_id: DataTypes.INTEGER,
    membership_id: DataTypes.INTEGER,
    policy_number: DataTypes.STRING,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    card_image_name: DataTypes.STRING,
    email_sent: DataTypes.BOOLEAN
  }, {
    tableName: 'emedical_cards'
  });
  EmedicalCard.associate = function(models) {
    EmedicalCard.belongsTo(models.User, {foreignKey: 'user_id'})
    EmedicalCard.belongsTo(models.Membership, {foreignKey: 'membership_id'})
  };
  return EmedicalCard;
};