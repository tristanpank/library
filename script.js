let myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function collectInput() {
    let newBookTitle = document.getElementById('title').value;
    let newBookAuthor = document.getElementById('author').value;
    let newBookPages = document.getElementById('pages').value;
    let newBook = new Book(newBookTitle, newBookAuthor, newBookPages);
    addBookToLibrary(newBook);
    console.log(myLibrary[0].title);
    console.log(myLibrary[0].author);
    console.log(myLibrary[0].pages);
}

let submitButton = document.getElementById('submit-form');
console.log(submitButton);
submitButton.addEventListener('click', collectInput);

