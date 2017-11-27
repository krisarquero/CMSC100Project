const router = require('express').Router();
const CategoryController = require('../controllers/category-controller');

/**
 * GET    /find-all
 * GET    /find-by-id
 * POST   /add
 * POST   /delete
 */

router.get('/category/find-all', CategoryController.findAll);
router.get('/category/find-by-id/:_id', CategoryController.findById);
router.post('/category/add', CategoryController.add);
router.post('/category/delete', CategoryController.delete);
router.post('/category/edit', CategoryController.edit);
module.exports = router;
