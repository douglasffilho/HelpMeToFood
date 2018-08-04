
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/HelpMeToFood'));

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+'/dist/HelpMeToFood/index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port);

console.log(`Server listening on port: ${port}`);
