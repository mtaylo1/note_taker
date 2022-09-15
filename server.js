const fs = require('fs');
const express = require('express');
const path = require('path');
const uuid = require('uuid');
const apiRoutes = require('./routes/api/notes');
const htmlRoutes = require('./routes/html/htmlRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use(apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, function() {
    console.log('App Running. Now listening on PORT: ' + PORT);
});