
const validarJWT = require('../middlewares/validar-jwt');
const validarCampos = require('../middlewares/validar-campos');
const isAdminRole = require('../middlewares/validar-roles');
const haveRole = require('../middlewares/validar-roles');

module.exports = {
    ...isAdminRole,
    ...haveRole,
    ...validarCampos,
    ...validarJWT 
}