// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Doctor extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   Doctor.init({
//     doctorName: DataTypes.STRING,
//     doctorEmail: DataTypes.STRING,
//     doctorId: DataTypes.INTEGER,
//     patientId: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'Doctor',
//   });
//   return Doctor;
// };

module.exports = (sequelize, DataTypes) => {
  const Doctor = sequelize.define('Doctor', {
    doctorName: DataTypes.STRING,
    doctorEmail: DataTypes.STRING,
    doctorId: DataTypes.INTEGER,
    patientId: DataTypes.INTEGER
  }, {});
  Doctor.associate = function (models) {
    // associations can be defined here
    Doctor.hasMany(models.Patient, {
      foreignKey: 'patientId',
      as: 'doctor_details',
      onDelete: 'CASCADE',
    });

    Doctor.hasMany(models.Appointment, {
      foreignKey: 'appointmentId',
      as: 'doctor',
      onDelete: 'CASCADE',
    });
  };
  return Doctor;
};

