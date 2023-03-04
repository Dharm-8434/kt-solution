const express = require('express');
const router = express.Router();
const {createUser,getEmployee} = require('../controller/employeMaster')

router.post('/create',createUser)
router.get('/getEmployee',getEmployee)


module.exports = router