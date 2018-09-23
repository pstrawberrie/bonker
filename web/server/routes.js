const express = require('express');
const router = express.Router();
//const { handleAsync } = require('./util/errorHandler');

// Controllers
//const userController = require('./controllers/userController');

// ++ Default Profile GET
router.get('/', (req, res) => {
  res.sendFile('../app/dist/index.html');
});

module.exports = router;
