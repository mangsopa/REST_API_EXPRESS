const UsersModel = require('../models/users')

const getAllUsers = async (req, res) => {
    try {
        const [rows] = await UsersModel.getAllUsers();

        res.json({
            message: 'GET all users success',
            data: rows
        })
    } catch (error) {
        res.status(500).json({
            message: 'GET all users failed',
            serverMessage: error
        })
    }
}

const createNewUser = async (req, res) => {
    const { body } = req

    if (!body.email || !body.name || !body.address) {
        return res.status(400).json({
            message: 'Email, name, and address is required',
            data: null,
        })
    }

    try {
        await UsersModel.createNewUser(body);
        res.status(201).json({
            message: 'Create new users success',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Create users failed',
            serverMessage: error
        })
    }
}

const updateUser = async (req, res) => {
    const { idUser } = req.params
    const { body } = req

    try {
        await UsersModel.updateUser(body, idUser);
        res.json({
            message: 'Update users success',
            data: {
                id: idUser,
                ...body,
            }
        })
    } catch (error) {
        res.status(500).json({
            message: 'Update users failed',
            serverMessage: error
        })
    }
}

const deleteUser = async (req, res) => {
    const { idUser } = req.params

    try {
        await UsersModel.deleteUser(idUser);
        res.json({
            message: 'Delete users success',
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: 'Delete users failed',
            serverMessage: error
        })
    }
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
}