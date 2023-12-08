//Try creating a json object variable for a book. The book should 
// have a title, description, author and number of pages
//Try printing these object property values in your console
// individually and via the whole book object
//Update the description of the book.

const book = {
"Title" : "Dylans Book",
"Description" : "A book about Dylan",
"Author" : "Dylan",
"Pages" : "100"
}

console.log(book.Author);
console.log(book.Description);
console.log(book.Title);
console.log(book.Pages);

book.Description = "A book about someone else ";
console.log(book.Description);