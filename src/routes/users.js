const express = require('express')

const userController = require('../controllers/users')

const router = express.Router()

// Mengambil data user
router.get('/', userController.getAllUsers)

// Membuat user baru
router.post('/', userController.createNewUser)

// Update user
router.patch('/:idUser', userController.updateUser)

// Update user
router.delete('/:idUser', userController.deleteUser)

module.exports = router