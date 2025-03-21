const dbPool = require('../config/db')

const getAllDepartments = () => {
    const SQLQuery = 'SELECT * FROM department'
    return dbPool.execute(SQLQuery)
}

const createNewDepartments = (body) => {
    const SQLQuery = `  INSERT INTO department (id_users, name, description) 
                        VALUES ('${body.id_users}', '${body.name}', '${body.description}')`
    return dbPool.execute(SQLQuery)
}

const updateDepartments = (body, idDepartment) => {
    const SQLQuery = `  UPDATE department
                        SET name='${body.name}', description='${body.description}' WHERE id = ${idDepartment}`
    return dbPool.execute(SQLQuery)
}

const deleteDepartments = (idDepartment) => {
    const SQLQuery = ` DELETE FROM department WHERE id = ${idDepartment}`
    return dbPool.execute(SQLQuery)
}

module.exports = {
    getAllDepartments,
    createNewDepartments,
    updateDepartments,
    deleteDepartments
}