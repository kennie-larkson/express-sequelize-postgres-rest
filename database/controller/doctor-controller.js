const models = require("../models")

const getAllDoctors = async (req, res) => {
  try {
    const doctors = await models.Doctor.findAll({
      include: [
        {
          model: models.Patient,
          as: 'doctor_details'
        },
        {
          model: models.Appointment,
          as: 'doctor'
        }]
    })
    return res.send(doctors)
  } catch (error) {
    return res.status(500).send(error)
  }
}

const createDoctor = async (req, res) => {
  try {
    const doctor = await models.Doctor.create(req.body);
    return res.send(doctor)
  }
  catch (error) {
    return res.status(500).send(error)
  }
}

const getDoctor = async (req, res) => {
  try {
    const id = req.params.id;
    const doctor = await models.Doctor.findOne(
      {
        where: { id: id },
        include: [
          {
            model: models.Patient,
            as: 'doctor_details'
          },
          {
            model: models.Appointment,
            as: 'doctor'
          }]
      },
    );
    return res.send(doctor)
  }
  catch (error) {
    return res.status(500).send(error.message);
  }
}

const updateDoctor = async (req, res) => {
  try {
    const id = req.params.id;
    const updated = await models.Doctor.update(req.body,
      {
        where: { id: id }
      });

    if (updated) {
      const updatedPost = await models.Post.findOne({ where: { id: id } });
      return res.status(200).send(updatedPost)
    }
    else {
      throw new Error('Doctor not found');
    }
  }
  catch (error) {
    return res.status(500).send(error.message);
  }
}

const deleteDoctor = async () => {

  try {
    const id = req.params.id;
    const deleted = await models.Doctor.destroy(
      {
        where: { id: id }
      });

    if (deleted) {

      return res.status(200).send(`Doctor successfully deleted`)
    }
    else {
      throw new Error('Doctor not found');
    }
  }
  catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = { getAllDoctors, createDoctor, updateDoctor, deleteDoctor, getDoctor }