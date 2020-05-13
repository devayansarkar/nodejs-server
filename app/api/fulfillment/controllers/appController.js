const express = require('express');
const router = express.Router();

const { doService } = require('../services/appService')

router.get('/', (req, res, next) => {
    doService()
    res.sendStatus(202)
});

module.exports = router;