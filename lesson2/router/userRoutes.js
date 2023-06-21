const express = require('express');
const router = express.Router();
const userControl = require('../userControl');

router.get('/:id', userControl.getUserById);
router.post('/', userControl.createUser);
router.put('/:id', userControl.updateUser);
router.delete('/:id', userControl.deleteUser);

module.exports = router;