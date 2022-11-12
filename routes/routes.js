const express = require('express');
const subsData = require('../controller/datacontroller');
const router = express.Router();

router.post("/" , subsData);

module.exports = router;