const ENVIRONMENT = process.env.NODE_ENV || 'development';

if (ENVIRONMENT !== 'production') require('dotenv').config();

module.exports = {
  common: {
    database: {
      stringConnection: process.env.DATABASE_STRING_CONNECTION
    }
  }
}
