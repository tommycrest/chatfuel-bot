var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send("{\"messages\": [{\"attachment\":{\"type\":\"template\",\"payload\":{\"template_type\":\"generic\",\"elements\":[{\"title\":\"Fascia perimetrale BigMat\",\"image_url\":\"http://www.bigmat.it/contents/instance2/files/photo/8895_138_Isolmant_Fascia-.jpg\",\"subtitle\":\"SFascia perimetrale BigMat\",\"buttons\":[{\"type\":\"web_url\",\"url\":\"http://www.bigmat.it/site/it/home/prodotti-e-servizi/prodotti.html?P0_idCardLevel=2988&P0_idCard=3872&P0_from=1&P0_size=12\",\"title\":\"View Item\"},{\"type\":\"web_url\",\"url\":\"http://www.bigmat.it/site/it/home/prodotti-e-servizi/prodotti.html?P0_idCardLevel=2988&P0_idCard=3872&P0_from=1&P0_size=12\",\"title\":\"Buy Item\"}]},{\"title\":\"Fascia perimetrale tecnica doppio spessore BigMat\",\"image_url\":\"http://www.bigmat.it/contents/instance2/files/photo/11809_138_FPTDS370x200.jpg\",\"subtitle\":\"Fascia perimetrale tecnica doppio spessore BigMat\",\"buttons\":[{\"type\":\"web_url\",\"url\":\"http://www.bigmat.it/site/it/home/prodotti-e-servizi/prodotti.html?P0_idCardLevel=2988&P0_idCard=4095&P0_from=1&P0_size=12\",\"title\":\"View Item\"},{\"type\":\"web_url\",\"url\":\"http://www.bigmat.it/site/it/home/prodotti-e-servizi/prodotti.html?P0_idCardLevel=2988&P0_idCard=3872&P0_from=1&P0_size=12\",\"title\":\"Buy Item\"}]}]}}}]}");
});

module.exports = router;