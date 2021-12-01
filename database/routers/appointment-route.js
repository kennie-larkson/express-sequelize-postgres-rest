const express = require("express")
const { getAllAppointments, getAppointment, updateAppointment, deleteAppointment, createAppointment } = require("../controller/appointment-controller.js")
const appointmentRouter = express.Router()


appointmentRouter.get("/appointments", getAllAppointments)
appointmentRouter.get("/:id", getAppointment)
appointmentRouter.post("/", createAppointment)
appointmentRouter.patch("/:id", updateAppointment)
appointmentRouter.delete("/:id", deleteAppointment)

module.exports = appointmentRouter

