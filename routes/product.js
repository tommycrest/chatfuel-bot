var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('{\"messages\": [{\"attachment\": {\"type\": \"template\",\"payload\": {\"template_type\": \"button\",\"text\": \"Hello!\",\"buttons\": [{\"type\": \"show_block\",\"block_name\": \"some block name\",\"title\": \"Show the block!\"},{\"type\": \"web_url\",\"url\": \https://petersapparel.parseapp.com/buy_item?item_id=100\",\"title\": \"Buy Item\"}]}}}]}');
});

module.exports = router;