// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Patient extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   Patient.init({
//     patientName: DataTypes.STRING,
//     patientEmail: DataTypes.STRING,
//     patientId: DataTypes.INTEGER,
//     doctorId: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'Patient',
//   });
//   return Patient;
// };

module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    patientName: DataTypes.STRING,
    patientEmail: DataTypes.STRING,
    patientId: DataTypes.INTEGER,
    doctorId: DataTypes.INTEGER
  }, {});
  Patient.associate = function (models) {
    // associations can be defined here
    Patient.hasMany(models.Doctor, {
      foreignKey: 'doctorId',
      as: 'patient_details',
      onDelete: 'CASCADE',
    }
    );

    Patient.hasMany(models.Appointment, {
      foreignKey: 'appointmentId',
      as: 'patient',
      onDelete: 'CASCADE',
    });
  };
  return Patient;
};



