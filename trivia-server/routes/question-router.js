const router = require('express').Router();
const QuestionController = require('../controllers/question-controller');

/**
 * GET    /find-all
 * GET    /find-by-id
 * POST   /add
 * POST   /delete
 */

router.get('/find-all', QuestionController.findAll);
router.get('/find-by-id/:_id', QuestionController.findById);
router.post('/add', QuestionController.add);
router.post('/delete', QuestionController.delete);
module.exports = router;
