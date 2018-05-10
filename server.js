const express = require('express');
const app = express();
const port = 10075;

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(express.static(__dirname + '/public'));

app.listen(port, function () {
  console.log('Example app listening on port ' + port + ' !');
});


app.get("/ajax_data", function(req, res) {
    res.send(req.query.message);
})