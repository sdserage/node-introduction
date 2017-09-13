var books = []

var id = 0;

module.exports = {
  create: function(req, res, next){
    var newBook = req.body;
    newBook.id = id;
    id++;
    books.push(newBook);
    res.status(200).send(books);
  },
  read: function(req, res, next){
    res.status(200).send(books);
  },
  readById: function(req, res, next){
    var ID = req.params.id;
    var book = books.filter(book => book.id == ID);
    res.status(200).send(book);
  },
  update: function(req, res, next){
    var updatedBook = req.body;
    var ID = req.params.id;
    updatedBook.id = ID;
    var book = books.forEach(function(book,index,books){
      if(book.id == ID){
        books.splice(index,1,updatedBook);
      }
    })

    res.status(200).send(books);
  },
  delete: function(req, res, next){
    var ID = req.params.id;
    books.forEach(function(book,index){
      if(book.id == ID){
        books.splice(index,1);
      }
    })

    res.status(200).send(books);
  }
}
