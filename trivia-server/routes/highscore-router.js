const router = require('express').Router();
const HighscoreController = require('../controllers/highscore-controller');

/**
 * GET    /find-all
 * GET    /find-by-id
 * POST   /add
 * POST   /delete
 */

router.get('/find-all', HighscoreController.findAll);
router.get('/find-by-id/:_id', HighscoreController.findById);
router.post('/add', HighscoreController.add);
module.exports = router;
