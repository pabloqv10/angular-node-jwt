const express = require('express');
const app = express();

require('./database');
app.use(express.json());

app.use('/api', require('./routes'));

app.listen(3000, () => {
  console.log(`Server running on port 3000`);
})
