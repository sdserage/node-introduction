var books = {
  title: "Harry Potter",
  author: "J.K. Rowling"
}

module.exports = {
  create: function(req, res, next){

  },
  read: function(req, res, next){
    res.status(200).send(books);
  },
  readById: function(req, res, next){

  },
  update: function(req, res, next){

  },
  delete: function(req, res, next){

  }
}
