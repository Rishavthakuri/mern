import {login,register} from '../controller/auth.js'




const express = require('express');
const router = express.Router();



router.post('/register',register) 
module.exports = router;

