
const books = [
    {name: 'white fang', author: 'jack london'},
    {name: '1984', author: 'george orwell'},
    {name: 'Les Miserables', author: 'victor hugo'},
]

const listBook = () => {
         books.map(item => {
           
            
         console.log(item.name);
    });
}

const addBook = (newBook) => {
    const promise1 = new Promise((resolve, reject) => {
        books.push(newBook)
        // reject('error')
    })
    return promise1
}

addBook({name: 'The Great Gatsby', author: 'F. Scott Fitzgerald'})
    .then(() => {
        console.log('new list')
        .
        listBook()

    })
    .catch((error) => {
        console.log(error)
    })

listBook()