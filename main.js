// write your code here to make the tests pass
var Library = function () {
  var books = [];

  var addBook = function (book) {
    books.push(book);
  };

  var checkOutBook = function (book) {
    if(books.includes(book)){
      book.setAttribute('checkedOut', true);
    }
    else{
      console.log(`${book} not in library`);
    };
  };

  var returnBook = function (book) {
    if(books.includes(book)){
      book.setAttribute('checkedOut', false);
    }else{
      console.log(`${book} not in library`);
    };
  };

  return {
    addBook: addBook,
    checkOutBook: checkOutBook,
    returnBook: returnBook
  };
};

var Book = function (title, author) {
  var attributes = {
    title: title,
    author: author,
    checkedOut: false
  };
  
  var getAttribute = function (prop) {
    if (attributes.hasOwnProperty(prop)){
      return attributes[prop];
    }
  };

  var setAttribute = function (prop, value) {
    if (attributes.hasOwnProperty(prop)){
    attributes[prop] = value;
    };
  };

  return {
    getAttribute: getAttribute,
    setAttribute : setAttribute 
  };
};