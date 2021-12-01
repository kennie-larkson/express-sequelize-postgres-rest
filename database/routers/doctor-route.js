const express = require("express")
const { getAllDoctors, createDoctor, updateDoctor, deleteDoctor, getDoctor } = require("../controller/doctor-controller.js")
const doctorRouter = express.Router()


doctorRouter.get("/doctors", getAllDoctors)
doctorRouter.get("/:id", getDoctor)
doctorRouter.post("/", createDoctor)
doctorRouter.patch("/:id", updateDoctor)
doctorRouter.delete("/:id", deleteDoctor)

module.exports = doctorRouter

