var express = require('express');
var router = express.Router();
var http = require('http');


/* GET users listing. */
router.post('/', function(req, res, next) {
    console.log(req.body.messages);
    
    requestToWikipedia(req.body.messages);
    
    res.send();
    res.end();
});

function escapeSpecialChars(str) { 
    return str.replace(/\\/g, "\\\\")
        .replace(/\n/g, "\\n")
        .replace(/\r/g, "\\r")
        .replace(/\t/g, "\\t")
        .replace(/\f/g, "\\f")
        .replace(/"/g,"\\\"")
        .replace(/'/g,"\\\'")
        .replace(/\&/g, "\\&"); 
} 

// metodo per effettuare la chiamata a google ed 
// ottenere il json per la costruzione della risposta
// http://www.google.it/search?q=post+su+google+con+express
function requestToGoogle(queryStr){

  console.log(queryStr);
  var myJSON = JSON.stringify(queryStr);
  var myEscapedJSONString = escapeSpecialChars(myJSON);
    
   console.log(myEscapedJSONString.substr(2,myEscapedJSONString.length-4));
    
   var options = {
        host: 'www.google.it',
        path: '/search?q='+myEscapedJSONString.substr(2,myEscapedJSONString.length-4).replace(/\ /g, "\+")
   };
    
    
   callback = function(response) {
    var str = '';

    //another chunk of data has been recieved, so append it to 
    response.on('data', function (chunk) {
        str += chunk;
    });

    //the whole response has been recieved, so we just print it out here
    response.on('end', function () {
        console.log(str);
        response.send(str);
    });
 }

   http.request(options, callback).end();
};

/**
    var playListURL = 'http://en.wikipedia.org/w/api.php?format=json&action=query&titles=India&prop=revisions&rvprop=content&callback=?';
*/

function requestToWikipedia( lookingFor ) {
    
   var options = {
        host: 'en.wikipedia.org',
        path: '/w/api.php?format=json&action=query&titles=India&prop=revisions&rvprop=content&callback=?'
   };
    
    
   callback = function(response) {
    var str = '';

    //another chunk of data has been recieved, so append it to 
    response.on('data', function (chunk) {
        str += chunk;
    });

    //the whole response has been recieved, so we just print it out here
    response.on('end', function () {
        console.log(str);
        response.send(str);
    });
 }

   http.request(options, callback).end();
}

module.exports = router;