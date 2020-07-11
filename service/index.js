
var mongoose = require('Mongoose');
var model = require('../model/schema.js');




class Service {

    create(data) {
      
      
      
        var pergunta = new model({
            pergunta:data
         
        });
        return new Promise((resolve, reject) => {
            model.create(pergunta)
                .then(result => resolve(result))
                .catch(err => reject(err))
        })
    }
}

module.exports = new Service();