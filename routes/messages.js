var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
    console.log(req.body);
    
    res.send();
    res.end();
});

// metodo per effettuare la chiamata a google ed 
// ottenere il json per la costruzione della risposta
// http://www.google.it/search?q=post+su+google+con+express
function requestToGoogle(queryStr){
    var retVal = router.post('http://www.google.it/search?q='+queryStr);
    console.log(retVal);
};

module.exports = router;