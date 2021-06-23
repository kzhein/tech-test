const charts = require('../controllers/chart.controller.js');

const router = require('express').Router();

router.get('/bar', charts.ageGroup);

router.get('/pie', charts.genderRatio);

router.post('/chart', charts.create);

router.get('/chart', charts.getAll);

module.exports = router;
