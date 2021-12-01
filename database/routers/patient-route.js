const express = require("express")
const { getAllPatients, createPatient, getPatient, deletePatient, updatePatient } = require("../controller/patient-controller.js")
const patientRouter = express.Router()


patientRouter.get("/patients", getAllPatients)
patientRouter.get("/:id", getPatient)
patientRouter.post("/", createPatient)
patientRouter.patch("/:id", updatePatient)
patientRouter.delete("/:id", deletePatient)

module.exports = patientRouter

