//Below code uses async/await, which will meet deliverables, but will not pass test, as they are based on using .then() method.

async function fetchBooks() {
  const response = await fetch('https://anapioficeandfire.com/api/books');
  const data = await response.json();
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

function findNthBook(books, nth) {
  console.log(`Book number ${nth} of the series is called "${books[nth - 1].name}".`);
}

async function findNthCharacter(nth) {
  const response  = await fetch(`https://anapioficeandfire.com/api/characters/${nth}`);
  const characterData = await response.json();
  console.log(`Character number ${nth} in the series is named "${characterData.name}".`);
}

function totalPages(books) {
  let sumPages = 0;
  books.forEach((book) => {
    sumPages = sumPages + book.numberOfPages;
  })
  console.log(`The total number of pages in this series is ${sumPages}.`);
}

document.addEventListener('DOMContentLoaded', async function() {
  const booksList = await fetchBooks();
  renderBooks(booksList);
  //Below suggested deliverables from Canvas module:
  //1. Find the 5th book in the series
  findNthBook(booksList, 5);
  //2. Find the 1031st character in the series
  await findNthCharacter(1031);
  //3. Find the total number of pages of all the books
  totalPages(booksList);
});