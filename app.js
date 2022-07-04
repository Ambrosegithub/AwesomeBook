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
