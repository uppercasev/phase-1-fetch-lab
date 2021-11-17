//Below code uses async/await, which will meet deliverables, but will not pass test, as they are based on using .then() method.
async function fetchBooks() {
  const response = await fetch('https://anapioficeandfire.com/api/books');
  const data = await response.json();
  console.log(data);
  return data;
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

//Below suggested deliverables from Canvas module:
//1. Find the 5th book in the series
function findNthBook(books, nth) {
  console.log(`Book number ${nth} of the series is called "${books[nth - 1].name}".`);
}

// 2. Find the 1031st character in the series

// 3. Find the total number of pages of all the books
function totalPages(books) {
  //get value of numberOfPages of each book and put into new array using .map() method
  const pagesArray = books.map((book) => book.numberOfPages);
  //use .reduce() method to add all numbers together
  const reducerFunction = (previousValue, currentValue) => previousValue + currentValue;
  const sumPages = pagesArray.reduce(reducerFunction);
  console.log(`The total number of pages in this series is ${sumPages}.`);
}

document.addEventListener('DOMContentLoaded', async function() {
  const booksList = await fetchBooks();
  renderBooks(booksList);
  findNthBook(booksList, 5);
  totalPages(booksList);
});