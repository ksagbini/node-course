/**
 * SERVER GLOBAL CONFIG FILE
 */


// ==============================
// PORT NUMBER
// ==============================
process.env.PORT = process.env.PORT || '3000';


/**
 * Enviroment
 */
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';




/**
 * Database config values
 */
let urlDB = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds261072.mlab.com:61072/${process.env.DB_NAME}`;
process.env.URL_DB = urlDB;
