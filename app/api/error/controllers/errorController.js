const express = require('express');
const router = express.Router();

router.post('/**', (req, res, next) => {
    res.send({
        description: 'Unidentified resource. Please check the url and try again.'
    }).status(404);
});

router.put('/**', (req, res, next) => {
    res.send({
        description: 'Unidentified resource. Please check the url and try again.'
    }).status(404);
});

router.patch('/**', (req, res, next) => {
    res.send({
        description: 'Unidentified resource. Please check the url and try again.'
    }).status(404);
});

router.get('/**', (req, res, next) => {
    res.send({
        description: 'Unidentified resource. Please check the url and try again.'
    }).status(404);
});
module.exports = router;
