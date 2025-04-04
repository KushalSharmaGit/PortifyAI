const express = require("express");
const router = express.Router();
const {createUser, loginUser, logoutUser, currentUser} = require('../controller/userController')
const {isAuthenticated} = require('../Middleware/isAuthenticated');


router.post('/register', createUser)

router.post('/login', loginUser)
  
router.post("/logout", logoutUser)
router.get('/current', isAuthenticated, currentUser)

module.exports = router;
