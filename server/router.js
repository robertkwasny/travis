// import lang from './lang.json';
const express = require('express');
const axios = require('axios');
const lang = require('./lang.json');

const Router = express.Router();

axios.defaults.withCredentials = true;

Router.get('/lang', (req, res) => {
    res.json(lang);
});

module.exports = Router;