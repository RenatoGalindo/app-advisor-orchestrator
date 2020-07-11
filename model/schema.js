const mongoose = require('mongoose');
const db = require('../db');

const schema = new db.mongoose.Schema({     
  pergunta            : { type: String, required: true }
  
}, 
{ collection: 'perguntas' });

module.exports = db.mongoose.model('Perguntas', schema);