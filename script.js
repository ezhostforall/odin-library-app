const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      read ? "read" : "not read yet"
    }`;
  };
}

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.unshift(book);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", 277, false);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, true);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, false);
addBookToLibrary("1984", "George Orwell", 328, true);
addBookToLibrary("Animal Farm", "George Orwell", 112, false);
addBookToLibrary("Brave New World", "Aldous Huxley", 288, true);
addBookToLibrary("Fahrenheit 451", "Ray Bradbury", 158, false);
addBookToLibrary("Lord of the Flies", "William Golding", 182, true);
addBookToLibrary("The Alchemist", "Paulo Coelho", 208, false);
addBookToLibrary("The Little Prince", "Antoine de Saint-Exupéry", 96, true);
addBookToLibrary("The Picture of Dorian Gray", "Oscar Wilde", 254, false);

console.log(myLibrary);

const bookList = document.querySelector(".book-list");
const bookListDiv = document.querySelector(".book-list-div");

const addBookBtn = document.createElement("button");
addBookBtn.classList.add("add-book-btn");
addBookBtn.textContent = "Add Book";
bookListDiv.appendChild(addBookBtn);
addBookBtn.addEventListener("click", () => {
  showForm();
});

function showForm() {
  const form = document.querySelector("#add-book-form");
  form.classList.toggle("hide-add-book-form");
}

const form = document.querySelector("#add-book-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read").checked;
  addBookToLibrary(title, author, pages, read);
  renderLibrary();
  form.reset();
  showForm();
});

function renderLibrary() {
    bookList.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.innerHTML = `
            <h3 class="book-title">${book.title}</h3>
            <p class="author">Author: ${book.author}</p>
            <p class="pages">Pages: ${book.pages}</p>
            <p class="read">${book.read ? "Read" : "Not Read Yet"}</p>
            `;
    bookList.appendChild(bookCard);
  }
}

renderLibrary();
