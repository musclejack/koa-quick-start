const User = require('../proxy/user')
const show = async (ctx) => {
    console.log(ctx.query)
    await User.createUser(ctx.query.name,ctx.query.password)
}
exports.show = show