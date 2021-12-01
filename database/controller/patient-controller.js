const models = require("../models")

const getAllPatients = async (req, res) => {
    try {
        const patients = await models.Patient.findAll({
            include: [
                {
                    model: models.Doctor,
                    as: 'patient_details'
                },
                {
                    model: models.Appointment,
                    as: 'patient'
                }]
        })
        return res.send(patients)
    } catch (error) {
        return res.status(500).send(error)
    }
}

const createPatient = async (req, res) => {
    try {
        const patient = await models.Patient.create(req.body);
        return res.send(patient)
    }
    catch (error) {
        return res.status(500).send(error)
    }
}

const getPatient = async (req, res) => {
    try {
        const id = req.params.id;
        const patient = await models.Patient.findOne(
            {
                where: { id: id },
                include: [
                    {
                        model: models.Doctor,
                        as: 'patient_details'
                    },
                    {
                        model: models.Appointment,
                        as: 'patient'
                    }]
            },
        );
        return res.send(patient)
    }
    catch (error) {
        return res.status(500).send(error.message);
    }
}

const updatePatient = async (req, res) => {
    try {
        const id = req.params.id;
        const updated = await models.Patient.update(req.body,
            {
                where: { id: id }
            });

        if (updated) {
            const updatedPatient = await models.Patient.findOne({ where: { id: id } });
            return res.status(200).send(updatedPatient)
        }
        else {
            throw new Error('Patient not found');
        }
    }
    catch (error) {
        return res.status(500).send(error.message);
    }
}

const deletePatient = async () => {

    try {
        const id = req.params.id;
        const deleted = await models.Patient.destroy(
            {
                where: { id: id }
            });

        if (deleted) {

            return res.status(200).send(`Patient successfully deleted`)
        }
        else {
            throw new Error('Patient not found');
        }
    }
    catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = { getAllPatients, createPatient, getPatient, deletePatient, updatePatient }