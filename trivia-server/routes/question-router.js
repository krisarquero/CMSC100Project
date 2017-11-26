const router = require('express').Router();
const QuestionController = require('../controllers/question-controller');

/**
 * GET    /find-all
 * GET    /find-by-id
 * POST   /add
 * POST   /delete
 */

router.get('/questions/find-all', QuestionController.findAll);
router.get('/questions/find-by-id/:_id', QuestionController.findById);
router.post('/questions/add', QuestionController.add);
router.post('/questions/delete', QuestionController.delete);
module.exports = router;
