'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Appointment.init({
    appointmentDate: DataTypes.DATE,
    appointmentId: DataTypes.INTEGER,
    doctorId: DataTypes.INTEGER,
    patientId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};

module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define('Appointment', {
    appointmentDate: DataTypes.DATE,
    appointmentId: DataTypes.INTEGER,
    doctorId: DataTypes.INTEGER,
    patientId: DataTypes.INTEGER
  }, {});
  Appointment.associate = function (models) {
    // associations can be defined here
    Appointment.belongsTo(models.Doctor, {
      foreignKey: 'doctorId',
      as: 'doctor',
      onDelete: 'CASCADE',
    });

    Appointment.belongsTo(models.Patient, {
      foreignKey: 'patientId',
      as: 'patient',
      onDelete: 'CASCADE',
    });
  };
  return Appointment;
};