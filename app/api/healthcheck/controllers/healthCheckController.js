const express = require('express');
const router = express.Router();

/**
 * Incase application is hosting a web application, this should be removed
 */
router.get('/', (req, res, next) => {
    res.send({
        status: 'ok'
    }).status(200);
});

router.get('/healthcheck', (req, res, next) => {
    res.send({
        status: 'ok'
    }).status(200);
});

module.exports = router;
