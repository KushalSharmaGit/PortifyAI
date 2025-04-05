const express = require("express");
const router = express.Router();
const {createPortfolio, viewPortfolio, viewDashboard, addDomain, getDomain} = require('../controller/portfolioController')
const {isAuthenticated} = require('../Middleware/isAuthenticated');


router.post('/create',isAuthenticated, createPortfolio);
router.get('/dashboard', isAuthenticated, viewDashboard);
router.get('/view/:id', viewPortfolio);
router.post('/domain/:id',isAuthenticated, addDomain);
router.get('/domian', getDomain)


module.exports = router;
