const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    }
});
userSchema.index({ username: 1, unique: true})
module.exports = mongoose.model("users", userSchema);
 