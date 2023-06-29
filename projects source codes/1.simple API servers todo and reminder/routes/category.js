const router = require('express').Router();
const categoryController = require('../controller/categoryController');
//get category
router.get('/', categoryController.getCategory);

// //add category
router.post('/', categoryController.addCategory);

// //update category
// router.put('/')

// //delete category
// router.delete('/')



module.exports = router;