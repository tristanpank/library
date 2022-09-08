let myLibrary = [];

function Book(title) {
    this.title = title;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function collectInput() {
    let newBookTitle = document.getElementById('title').value;
    let newBook = new Book(newBookTitle);
    addBookToLibrary(newBook);
    console.log(myLibrary[0].title);
}

let submitButton = document.getElementById('submit-form');
console.log(submitButton);
submitButton.addEventListener('click', collectInput);

