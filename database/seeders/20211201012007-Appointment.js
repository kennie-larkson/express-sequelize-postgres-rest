module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "Appointments",
      [
        {
          appointmentDate: new Date("2021, 12"),
          appointmentId: 1,
          patientId: 2,
          doctorId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          appointmentDate: new Date("2022, 01"),
          appointmentId: 2,
          patientId: 1,
          doctorId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          appointmentDate: new Date("2021, 02"),
          appointmentId: 3,
          patientId: 2,
          doctorId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("Appointments", null, {})
};

