import {admindash, admindash2} from '../controller/admin'



const express = require('express');
const router = express.Router();



router.get("/admin-dash",admindash) ;
module.exports = router;

router.get("/admin-dash2",admindash2) ;
module.exports = router;

router.get("/admin-dash3",admindash2) ;
module.exports = router;