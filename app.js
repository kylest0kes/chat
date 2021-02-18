const express = require('express');

const app = express();

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Listening on ${PORT}`));