const DepartmentModel = require('../models/departments')

const getAllDepartment = async (req, res) => {
    try {
        const [rows] = await DepartmentModel.getAllDepartments()

        res.json({
            message: 'GET all users success',
            data: rows
        })
    } catch (error) {
        res.status(500).json({
            message: 'GET all department failed',
            serverMessage: error
        })
    }
}

const createNewDepartment = async (req, res) => {
    const { body } = req

    if (!body.name || !body.description) {
        return res.status(400).json({
            message: 'Name, and description is required',
            data: null,
        })
    }

    try {
        const [rows] = await DepartmentModel.createNewDepartments(body)
        res.status(201).json({
            message: 'Create new department success',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Create department failed',
            serverMessage: error
        })
    }
}

const updateDepartment = async (req, res) => {
    const { idDepartment } = req.params
    const { body } = req

    try {
        await DepartmentModel.updateDepartments(body, idDepartment);
        res.json({
            message: 'Update deparment success',
            data: {
                id: idDepartment,
                ...body,
            }
        })
    } catch (error) {
        res.status(500).json({
            message: 'Update deparment failed',
            serverMessage: error
        })
    }
}

const deleteDepartment = async (req, res) => {
    const { idDepartment } = req.params

    try {
        await DepartmentModel.deleteDepartments(idDepartment);
        res.json({
            message: 'Delete deparment success',
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: 'Delete deparment failed',
            serverMessage: error
        })
    }
}

module.exports = {
    getAllDepartment,
    createNewDepartment,
    updateDepartment,
    deleteDepartment,
}