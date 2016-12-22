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
    var playListURL = 'https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Jimi_Hendrix';
*/

function requestToWikipedia( callback ) {
    
   return http.get({
        host: 'en.wikipedia.org',
        path: '/w/api.php?action=parse&format=json&prop=text&section=0&page=indonesia'
    }, function(response) {
        // Continuously update stream with data
        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {

            // Data reception is done, do whatever with it!
            var parsed = JSON.parse(body);
            console.log(parsed);
            /*callback({
                email: parsed.email,
                password: parsed.pass
            });*/
        });
    });
}

module.exports = router;