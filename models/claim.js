// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Claim extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   Claim.init({
//     claimId: DataTypes.INTEGER,
//     u_identifier: DataTypes.INTEGER,
//     address: DataTypes.STRING,
//     amount: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Claim',
//   });
//   return Claim;
// };

// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const Claim = sequelize.define('Claim', {
//     claimId: DataTypes.INTEGER,
//     u_identifier: DataTypes.STRING,
//     address: DataTypes.STRING,
//     amount: DataTypes.STRING,
//   }, {
//     tableName: 'claims'
//   });
//   return Claim;
// };

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ClaimSchema = new Schema({
  claimId: { type: Number, required: true},
  u_identifier: { type: String, required: true},
  address: { type: String, required: true},
  amount: { type: String, required: true}
})

var Claim = mongoose.model('claims', ClaimSchema)

module.exports = Claim
