const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const userSchema = new Schema({
    username: String,
    googleId: String
});

//create model
const User = mongoose.model('user', userSchema);

module.exports = User;