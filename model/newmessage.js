const mongoose = require('mongoose');

const MessageShema = mongoose.Schema({
    noms: String,
    email: String, 
    title: String, 
    message: String

})
const NewMessage = mongoose.model("message", MessageShema)


module.exports = NewMessage