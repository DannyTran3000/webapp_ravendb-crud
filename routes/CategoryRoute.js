const express = require('express')
const CategoryController = require('../controllers/CategoryController')

const router = express.Router()

router.get('/', CategoryController.selectAll)
router.post('/', CategoryController.insertCategory)
router.get('/:id', CategoryController.selectByID)
router.put('/:id', CategoryController.update)
router.delete('/:id', CategoryController.drop)

module.exports = router
