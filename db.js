class Database {
    constructor() {
        this.mongoose = require('mongoose');
        this.mongoose.Promise = global.Promise;
    };
    connectMongo() {
        this.mongoose
      
            .connect('mongodb+srv://chatbot:masterik61703@cluster0-wegmx.mongodb.net/chatbot?retryWrites=true&w=majority')
            .then(() => console.log(`Conectado a base de dados`))
            .catch(err => console.error('Falha ao tentar conexao com a base de dados ' + 'URI ' + 'mongodb+srv://chatbot:masterik61703@cluster0-wegmx.mongodb.net/chatbot?retryWrites=true&w=majority' + err))
    }
}
module.exports = new Database();