const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        this.authPath = '/api/auth';

        /* Conexión a la base de datos */
        this.connectionDB();
        /* Middlewares */
        this.middlewares();
        /* Rutas de mi aplicación */
        this.routes();
    }

    async connectionDB() {
        await dbConnection();
    }

    middlewares() {
        /* CORS */
        this.app.use( cors() );
        /* Lectura y Parseo del Body */
        this.app.use( express.json() );
        /* Directorio Público */
        this.app.use( express.static('public') );
    }

    routes() {
        this.app.use( this.usuariosPath, require('../routes/user') );
        this.app.use( this.authPath, require('../routes/auth') );
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`REST Server corriendo en el puerto: ${ this.port }`);
        });
    }
}

module.exports = Server;