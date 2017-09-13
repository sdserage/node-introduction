var express = require('express');
var bodyParser = require('body-parser');
var bookController = require('./server/controllers/books_controller');

var app = express();
//USE body parser
app.use(bodyParser.json());

app.get('/api/books', bookController.read);
app.get('/api/books/:id', bookController.readById);
app.post('/api/books', bookController.create);
app.put('/api/books/:id', bookController.update);
app.delete('/api/books/:id', bookController.delete);

app.listen(3000,function(){
  console.log("Blast off 3,000 ft above code level!")
})
