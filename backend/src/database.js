const mongoose = require('mongoose');
const { stringConnection } = require('../config').common.database;

mongoose.connect(stringConnection, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(db => console.log('Database connected'))
  .catch(error => console.log(error));
