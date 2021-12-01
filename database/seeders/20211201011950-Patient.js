module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "Patients",
      [
        {
          patientName: "John",
          patientEmail: "john@gmail.com",
          doctorId: 1,
          patientId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          patientName: "Jane",
          patientEmail: "jane@gmail.com",
          doctorId: 2,
          patientId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          patientName: "Doe",
          patientEmail: "doe@gmail.com",
          doctorId: 3,
          patientId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("Patients", null, {})
};
