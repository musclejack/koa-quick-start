const user = require('./controller/user')
const router = require('koa-router')()
router.get('/user', user.show)
module.exports = router
