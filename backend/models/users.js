const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    // Only use 1 field for user schema
 username: {
     type: String;
     required: true,
     unique: true,
     trim: true,
     minlength: 3
 },
}, {
    timestamps:true,
});


const User = mongoose.model('User', userSchema);

module.exports = User;