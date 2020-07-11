class Database {
    constructor() {
        this.mongoose = require('mongoose');
        this.mongoose.Promise = global.Promise;
    };
    connectMongo() {
        this.mongoose
            .connect('mongodb+srv://chatbot:masterik61703@cluster0-wegmx.mongodb.net/chatbot')
            .then(() => console.log(`Conectado a base de dados`))
            .catch(err => console.error('Falha ao tentar conexao com a base de dados' + err))
    }
}
module.exports = new Database();