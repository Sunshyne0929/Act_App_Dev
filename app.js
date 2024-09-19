const express = require('express');
const routes = require('./routes/routes'); 
const app = express();
app.set('view engine', 'ejs');

app.use('/', routes);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});