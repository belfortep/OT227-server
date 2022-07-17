var express = require('express');
var router = express.Router();

const {deleteById, register} = require('../controllers/testimonialsController');
const {isAdmin} = require('../middleware/checkRole');
const { param, body } = require('express-validator');
const { validateFields } = require('../helpers/validator');

router.delete('/:id', [
    isAdmin,
    param('id').isInt().withMessage('Should be a number'),
    validateFields
], deleteById );

router.post('/', [
    isAdmin,
    body('name').not().isEmpty().isString().withMessage('Not empty and should be a string'),
    body('content').not().isEmpty().isString().withMessage('Not empty and should be a string'),
    body('image').not().isEmpty().isString().optional(),
    validateFields
], register);

module.exports = router;