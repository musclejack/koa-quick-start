const User = require('../model/index').User
function createUser (name, password) {
    let user = User()
    user.name = name
    user.password = password
    return user.save()
}
function changeUser (password, avatar, tele, name) {
    let user = User()

    return user.save()
}
exports.createUser = createUser