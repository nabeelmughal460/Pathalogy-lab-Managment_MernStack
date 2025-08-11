const express=require("express")
const router =express.Router()
const testcontroller= require('../Controllers/TestController')
router.post('/post',testcontroller.postTest)
router.get('/get',testcontroller.getTest)
router.get('/getTest/:id',testcontroller.getTestByid)
module.exports =router;
