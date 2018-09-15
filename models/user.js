
const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/node-login')

mongoose.connect('mongodb://<ianant>:<Priyesh@98>@ds149672.mlab.com:49672/node-login')
    .then(()=> console.log("Connected to MongoDB..."))
    .catch(err => console.error("Could Not Connect...",err));

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    hashed_password: String,
    created_at: String,
    temp_password: String,
    temp_password_time: String 
});

mongoose.Promise = global.Promise;


module.exports = mongoose.model('user', userSchema);