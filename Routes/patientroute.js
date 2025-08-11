const express=require("express")
const router =express.Router()
const patientcontroller= require('../Controllers/patientController')
router.post('/post',patientcontroller.PostPatient)// for add method
router.get('/get/:id',patientcontroller.GetpatientByID)// for add method
router.get('/getStatus/:statusfind',patientcontroller.GetpatientByStatus)//pending status
router.put('/:id',patientcontroller.UpdatepatientByID)//pending status
router.get('/:id/TestDetails',patientcontroller.GetpatientTestDetails)
router.delete('/:id/',patientcontroller.DeletePatientByID)








module.exports=router;
