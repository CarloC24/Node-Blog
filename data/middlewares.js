const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const express = require('express');

module.exports = server => {
  server.use(helmet()),
    server.use(morgan('dev')),
    server.use(cors()),
    server.use(express.json());
};
