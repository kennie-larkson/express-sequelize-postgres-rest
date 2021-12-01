const models = require("../models")

const getAllAppointments = async (req, res) => {
    try {
        const appointments = await models.Appointment.findAll({
            include: [
                {
                    model: models.Doctor,
                    as: 'doctor'
                },
                {
                    model: models.Patient,
                    as: 'patient'
                }]
        })
        return res.send(appointments)
    } catch (error) {
        return res.status(500).send(error)
    }
}


const createAppointment = async (req, res) => {
    try {
        const appointment = await models.Appointment.create(req.body);
        return res.send(appointment)
    }
    catch (error) {
        return res.status(500).send(error)
    }
}

const getAppointment = async (req, res) => {
    try {
        const id = req.params.id;
        const appointment = await models.Appointment.findOne(
            {
                where: { id: id },
                include: [
                    {
                        model: models.Doctor,
                        as: 'doctor'
                    },
                    {
                        model: models.Patient,
                        as: 'patient'
                    }]
            },
        );
        return res.send(appointment)
    }
    catch (error) {

        return res.status(500).send(error.message);
    }
}

const updateAppointment = async (req, res) => {
    try {
        const id = req.params.id;
        const updated = await models.Appointment.update(req.body,
            {
                where: { id: id }
            });

        if (updated) {
            const updatedAppointment = await models.Appointment.findOne({ where: { id: id } });
            return res.status(200).send(updatedAppointment)
        }
        else {
            throw new Error('Appointment not found');
        }
    }
    catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteAppointment = async () => {

    try {
        const id = req.params.id;
        const deleted = await models.Appointment.destroy(
            {
                where: { id: id }
            });

        if (deleted) {

            return res.status(200).send(`Appointment successfully deleted`)
        }
        else {
            throw new Error('Appointment not found');
        }
    }
    catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = { getAllAppointments, getAppointment, updateAppointment, deleteAppointment, createAppointment }