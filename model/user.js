const mongoose = require('mongoose')

let Schema  = mongoose.Schema

let userSchema = new Schema({
  name: { type: String },
  password: { type: String },
  score: { type: Number, default: 0 },
  tele: { type: Number },
  avatar: { type: String },
  desc: { type: String },
  create_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now }
})

userSchema.index({name: 1}, {unique: true})


userSchema.pre('save', function (next) {
    var currentDate = new Date()
    this.updated_at = currentDate

    if (!this.created_at) {
        this.created_at = currentDate
    }

    next()
})


mongoose.model("User", userSchema)