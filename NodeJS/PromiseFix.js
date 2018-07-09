var Promise = require('bluebird');

function getUser(){
    return new Promise((resolve, reject) => {
        throw new Error('My error message');        
    }).then(function(data){
        resolve(data);
    }).catch(function (error) {
        reject(erro);
    })
}