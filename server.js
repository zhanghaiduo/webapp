 var port = 3000,
     express = require('express'),
     app = express();
 app.use('/', express.static(__dirname));
 app.listen(port);
 console.log('Now serving http://localhost:' + port + '/index.html');