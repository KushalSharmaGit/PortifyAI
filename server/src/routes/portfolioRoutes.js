const express = require("express");
const router = express.Router();
const {createPortfolio, viewPortfolio, viewDashboard} = require('../controller/portfolioController')
const {isAuthenticated} = require('../Middleware/isAuthenticated');


router.post('/create',isAuthenticated, createPortfolio);
router.get('/dashboard', isAuthenticated, viewDashboard);
router.get('/view', viewPortfolio);


module.exports = router;
