var express = require('express');
var router = express.Router();
var http = require('http');


/* GET users listing. */
router.post('/', function(req, res, next) {
    console.log(req.body.messages);
    
    res.send('');
    res.end();
});

router.get('/', function(req,res, next){
    //requestToWikipedia(req.body.messages);
    res.send("{\"messages\": [ { \"attachment\": { \"type\": \"image\",\"payload\": {\"url\": \"https://petersapparel.parseapp.com/img/item101-thumb.png\" }}}]}");
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


module.exports = router;