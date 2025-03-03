//Class constructor for Book objects
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  
  info() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      read ? "read" : "not read yet"
    }`;
  };
  toggleRead() {
    this.read = !this.read;
  };
}

//Library array
const myLibrary = [];

//Add a book to the library
function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.unshift(book);
}

//Remove book from library
function removeBookFromLibrary(index) {
  if (confirm("Are you sure you want to remove this book?")) {
    myLibrary.splice(index, 1);
    renderLibrary();
  } else {
    return;
  }
}

//Render the library
const bookList = document.querySelector(".book-list");
const bookListDiv = document.querySelector(".book-list-div");
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
      <button class="remove-book-btn" data-index="${i}">Remove</button>
      <button class="toggle-read-btn" data-index="${i}">Toggle Read</button>
    `;
    bookList.appendChild(bookCard);
  }

  //Event listeners for remove buttons
  const removeButtons = document.querySelectorAll(".remove-book-btn");
  removeButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const index = e.target.getAttribute("data-index");
      removeBookFromLibrary(index);
    });
  });
  
  //Event listeners for toggle read buttons
  const toggleReadButtons = document.querySelectorAll(".toggle-read-btn");
  toggleReadButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const index = e.target.getAttribute("data-index");
      myLibrary[index].toggleRead();
      renderLibrary();
    });
  });
}

//Show form
function showForm() {
  const form = document.querySelector("#add-book-form");
  form.classList.toggle("hide-add-book-form");
}

//Form to add a book
const form = document.querySelector("#add-book-form");
const addBookBtn = document.createElement("button");
addBookBtn.classList.add("add-book-btn");
addBookBtn.textContent = "Add Book";
bookListDiv.appendChild(addBookBtn);
addBookBtn.addEventListener("click", () => {
  showForm();
});

//Event listener for form submission
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


//Adding some books to the library
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

renderLibrary();
