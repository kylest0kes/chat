const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 8080;

const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', htmlRoutes);

app.listen(PORT, console.log(`Listening on ${PORT}`));