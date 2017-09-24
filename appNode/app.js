var express = require('express');
var app = express();
const resources = require('./resources.json');
const port = 3000;

app.get('/', function (req, res) {
  res.send('Hi, Im root Node!');
});

app.use('/static', express.static(__dirname + '/static/files'));

app.get('/resources/fast/:resource_id', function(req, res) {
  const resource_id = req.params.resource_id;
  res.send(resources[resource_id]);
});

app.get('/resources/slow/:resource_id', function(req, res) {
  setTimeout(function(id){
        res.send(resources[id]);
    },
    500,
    req.params.resource_id );
});

app.listen(port, function () {
  console.log('Node app listening on port http://localhost:' + port + '/');
});
