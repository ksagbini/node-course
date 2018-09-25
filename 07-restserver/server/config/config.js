/**
 * SERVER GLOBAL CONFIG FILE
 */

/**
 * Port number
 */
process.env.PORT = process.env.PORT || '3000';


/**
 * Enviroment type
 */
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


/**
 * Database config values
 */
process.env.DB_USER = process.env.DB_USER || 'coffe_user';
process.env.DB_PASS = process.env.DB_PASS || 'rQ4GcYnSxXmmFkv';
process.env.DB_NAME = process.env.DB_NAME || 'coffe_db';
let urlDB = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds261072.mlab.com:61072/${process.env.DB_NAME}`;
process.env.URL_DB = urlDB;


/**
 * Token config 
 */
process.env.EXPIRES_TOKEN = 60 * 60 * 24 * 30;
process.env.SEED_TOKEN = process.env.SEED_TOKEN || 'SEED_DEV';


/**
 * GOOGLE CLIENT ID
 */
process.env.CLIENT_ID = process.env.CLIENT_ID  || '728040508595-sqb84j2at7o193rag4con01156t5rels.apps.googleusercontent.com'