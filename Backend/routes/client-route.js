const express = require('express');
const {check} = require('express-validator');
const router = express.Router();

const clientControllers = require('../controllers/clients-controller');

router.post('/createClientRecord',
        [check("ClientCode").not().isEmpty(),
        check("Email").normalizeEmail().isEmail(),
        check("LastName").not().isEmpty(),
        check("FirstName").not().isEmpty(),
        ], 
clientControllers.createClientRecord);



//you need the line below or you will get an error "TypeError('Router.use() requires a middleware function but got a ' + gettype(fn))"
module.exports = router;