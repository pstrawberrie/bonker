const express = require('express');
const router = express.Router();
const { catchErrors } = require('./handlers/errorHandlers');

/**
 * Require Controllers
 */
const defaultController = require('./controllers/defaultController');
const userController = require('./controllers/userController');

/**
 * Index + Generic Routes
 */
router.get('/', catchErrors(defaultController.index));
router.get('/users', catchErrors(userController.index));

/**
 * Core Services POST Routes
 */

router.post('/user/search', catchErrors(userController.searchUser));
router.post('/user/remove', catchErrors(userController.removeUser));


module.exports = router;
