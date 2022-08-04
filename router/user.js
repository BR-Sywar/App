const express= require('express')
const router=express.Router()
const UserCtrl=require("../controler/user")
const data = require("../controler/data")

router.post("/login", UserCtrl.login)
router.post("/registre", UserCtrl.registre)
router.post("/data", data.data)

module.exports = router