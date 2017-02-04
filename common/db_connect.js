const config = require('../config')
const mongoose = require('mongoose')
const db = mongoose.connection
mongoose.Promise = Promise
mongoose.connect(config.db)
db.once('open',()=> {
    console.log(`mongodb connect success  now！`)
});