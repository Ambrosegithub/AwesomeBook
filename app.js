/*
let bookList = [];
function displayBooks() {
  const outputFiled = document.getElementById('displayField');
  outputFiled.innerHTML = '';

  bookList.forEach((book) => {
    const outputField = document.getElementById('displayField');
    const bookListDiv = document.createElement('div');
    const bookName = document.createElement('h2');
    const bookAuthor = document.createElement('h3');
    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'remove book';
    const line = document.createElement('hr');
    removeBtn.classList.add('delete');

    bookName.innerHTML = `${book.titleName}`;
    bookAuthor.innerHTML = `${book.authorName}`;

    outputField.append(bookListDiv);
    bookListDiv.append(bookName, bookAuthor, removeBtn, line);
    removeBtn.addEventListener('click', () => {
      bookList = bookList.filter((t) => t !== book);
      localStorage.setItem('bookList', JSON.stringify(bookList));
      displayBooks();
    });
  });
}

window.addEventListener('load', () => {
  bookList = JSON.parse(localStorage.getItem('bookList')) || [];
  const inputform = document.getElementById('form');

  inputform.addEventListener('submit', (e) => {
    e.preventDefault();

    const book = {
      titleName: e.target.elements.titleName.value,
      authorName: e.target.elements.authorName.value,
    };

    bookList.push(book);
    localStorage.setItem('bookList', JSON.stringify(bookList));
    e.target.reset();

    displayBooks();
  });

  displayBooks();
});
*/
// class book list
// class ui
// class delete book
// class event
//class intances
// validate
// clearfield
//event listening for delete
// rep=> book

// create a class contructor
class bookBank {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
// add books to store
class bookStore {
  // add method to get book from store
  static getBookBank() {
    // check if local storage is empty
    var books;
    if (localStorage.getItem("book" === null)) {
      books = [];
    } else {
      // otherwise get books from store
      books.JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }
  // create method to add book to storage
  static addBook(book) {
    const books = bookStore.getBookBank();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }
  // remove book from storage
  static removeBook(title) {
    const books = bookStore.getBookBank();
    //looping through each book
    books.forEach((book, index) => {
      // checking if target exist
      if (book.title === title) {
        // then remove it, if it does exist
        books.splice(index, 1);
      }
    });
    localStorage.setItem("books", JSON.stringify(books));
  }
} 
// add book to ui
class userIterface {
  static displayBooks() {
     const outputField = document.querySelector('displayField');
     outputField.innerHTML = '',
     bookList.forEach(book => {
     const outputField = document.getElementById('displayField');
     const bookListDiv = document.createElement('div');
     const bookName = document.createElement('h2');
     const bookAuthor = document.createElement('h3');
     const removeBtn = document.createElement('button');
     removeBtn.innerText = 'remove book';
     const line = document.createElement('hr');
     removeBtn.classList.add('delete');
     bookName.innerHTML = `${book.titleName}`;
     bookAuthor.innerHTML = `${book.authorName}`;
 
   });
  };
 }
