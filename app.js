const express = require('express')
const models = require("./database/models")
// import { doctorRouter } from "./src/routes/index.js";
const doctorRouter = require("./database/routers/doctor-route.js")
const patientRouter = require("./database/routers/patient-route.js")
const appointmentRouter = require("./database/routers/appointment-route.js")

const router = express.Router()
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.get("/", (req, res) => {
    res
        .status(200)
        .json({ success: true, message: "You are welcome to Wevesti :)" });
});

app.use("/doctor", doctorRouter)
app.use("/patient", patientRouter)
app.use("/appointment", appointmentRouter)


// app.get("/doctors", async (req, res) => {
//     try {
//         const doctors = await models.Doctor.findAll({
//             include: [
//                 {
//                     model: models.Patient,
//                     as: 'doctor_details'
//                 },
//                 {
//                     model: models.Appointment,
//                     as: 'doctor'
//                 }]
//         })
//         return res.send(doctors)
//     } catch (error) {
//         return res.status(500).send(error)
//     }
// })


module.exports = app;
