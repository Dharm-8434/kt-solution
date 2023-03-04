const express = require('express');
const router = express.Router();
const {createUser,getEmployee,editEmployee} = require('../controller/employeMaster')

router.post('/create',createUser)
router.get('/get',getEmployee)
router.put('/edit',editEmployee)

module.exports = router