const mongooes = require("mongoose");

const usersSchema = mongooes.Schema({
  name: String,
  email: {
    type: String,
    require: true,
  },

},timestamp :true);

module.exports = mongooes.model('User' ,usersSchema)