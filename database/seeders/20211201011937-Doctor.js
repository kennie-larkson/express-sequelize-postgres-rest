module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "Doctors",
      [
        {
          doctorName: "Lawal",
          doctorEmail: "lawal@gmail.com",
          doctorId: 1,
          patientId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          doctorName: "kennie",
          doctorEmail: "kennie@gmail.com",
          doctorId: 2,
          patientId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          doctorName: "Abdul",
          doctorEmail: "abdul@gmail.com",
          doctorId: 3,
          patientId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("Doctors", null, {})
};
