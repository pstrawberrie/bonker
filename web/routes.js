const express = require('express');
const router = express.Router();
const { catchErrors } = require('./handlers/errorHandlers');

// Controllers
const defaultController = require('./controllers/defaultController');

// ++ Items
router.get('/',
  catchErrors(defaultController.index)
);

module.exports = router;
