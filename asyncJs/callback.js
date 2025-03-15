/* const func1 = () => {
  console.log('1.function rendered');
  func2();
} 

const func2 = () => {
    console.log('2.function rendered');
    func3();
  } 

  const func3 = () => {
    console.log('3.function rendered');
  } 
 func1();

*/


let bookList = [
    {name: 'white fang', author: 'jack london'},
    {name: '1984', author: 'george orwell'},
    {name: 'Les Miserables', author: 'victor hugo'},
]

 const listBooks = () => {
    bookList.map(book => {
        console.log(book.name );
    });
 }
function addBook(book, callback) {  
        bookList.push(book);
        callback();
}

addBook({name: 'The Great Gatsby', author: 'F. Scott Fitzgerald'} , listBooks);

let x = 5 
console.log('step1 ', x);

setTimeout(() => {
    x = x + 15
    console.log('step2 ', x);
}, 4000)

x = x + 15

console.log('step3 ', x);