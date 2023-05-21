const express = require('express');
const bodyParser = require('body-parser');
const router = require('./controller/skill.controller');

const app = express();

app.use(bodyParser.json());

app.use('/skill', router);

app.use((error, req, res, _next) => res.send(error.message));

module.exports = app;
