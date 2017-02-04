const mongoose = require('mongoose');
require('../common/db_connect');
require('./user');


exports.User = mongoose.model('User');
