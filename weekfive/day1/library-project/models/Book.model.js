// Require Schema and model methods of mongoose
const {Schema, model} = require('mongoose');

const bookSchema = new Schema(
    // Info that is going to be prompt
    {
     title: String, 
     description: String, 
     author: String, 
     rating: Number
    }, 
    // MongoDB Options
    {
     timestamps: true
    }
);

module.exports = model('Book', bookSchema);