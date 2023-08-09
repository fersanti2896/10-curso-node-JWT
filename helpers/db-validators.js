const Role = require('../models/role');
const Usuario = require('../models/usuario');

const isRoleValid = async(role = '') => {
    const existsRole = await Role.findOne({ role });

    if( !existsRole ) {
        throw new Error(`El rol ${ role } no está registrado en la BD.`)
    }
}

const isEmailExists = async( email = '' ) => {
    /* Verificando si el email existe */
    const existEmail = await Usuario.findOne({ email });

    if( existEmail ) {
        throw new Error(`El email ${ email } ya existe en otra cuenta.`)
    }
}

const existsUserById = async( id ) => {
    /* Verificar si el correo existe */
    const existsUser = await Usuario.findById(id);

    if( !existsUser ) {
        throw new Error(`El id ${ id } no existe.`)
    }
}

module.exports = {
    existsUserById,
    isEmailExists,
    isRoleValid
}