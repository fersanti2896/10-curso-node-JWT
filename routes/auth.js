
const { Router } = require('express');
const { check } = require('express-validator');
const { login } = require('../controller/authController');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.post('/login', [
    check('email', 'El correo es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    validarCampos
], login);

module.exports = router;