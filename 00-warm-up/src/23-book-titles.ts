export {};

const books = [
  {
    title: "4 hour work week",
    author: "Tim Ferris"
  },
  {
    title: "Tools of Titans",
    author: "Tim Ferris"
  }
];

const getTheTitles = (bookArray) => {
  let titles = [];
  bookArray.forEach(book => {
    titles.push(book.title);
  });
  return titles;
};

console.log(getTheTitles(books)); // Expected output: ['4 hour work week', 'Tools of Titans']
