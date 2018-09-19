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
let dbUser = 'coffe_user';
let dbPass = 'rQ4GcYnSxXmmFkv';
let dbName = 'coffe_db'; 
let urlDB = `mongodb://${dbUser}:${dbPass}@ds261072.mlab.com:61072/${dbName}`;
process.env.URL_DB = urlDB;
