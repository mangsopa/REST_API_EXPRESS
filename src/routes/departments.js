const express = require('express')

const departmentController = require('../controllers/departments')

const router = express.Router()

// Mengambil data department
router.get('/', departmentController.getAllDepartment)

// Membuat department baru
router.post('/', departmentController.createNewDepartment)

// Update department
router.patch('/:idDepartment', departmentController.updateDepartment)

// Update department
router.delete('/:idDepartment', departmentController.deleteDepartment)

module.exports = router