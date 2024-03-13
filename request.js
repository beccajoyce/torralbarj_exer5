import needle from 'needle';

// needle.get('http://localhost:3000/', (err, res) => {
//     console.log(res.body);   // prints the body of the response message. In this case, “Hello”
// });


// needle.get('http://info.cern.ch/hypertext/WWW/TheProject.html', (err, res) => {
//     console.log(res.body);   // prints an HTML string
// });

// needle.get('http://localhost:3000/greeting?name=Becca', (err, res) => {
//     console.log(res.body);   // prints the body of the response message. In this case, “Hello”
// });

// needle.post(
//     'http://localhost:3000/submit-data',
//     { name: 'Monina' },   // can be an object or a string
//     (err, res) => {
//       console.log(res.body);
//     }
//   );

//Start of the Exercise
needle.post(
    'http://localhost:3000/add-book',
    { bookName: "Harry Potter and the Philosopher’s Stone", isbn: "978-0-7475-3269-9",author: "J.K Rowling", yearPublished: "1997"},   // can be an object or a string
    (err, res) => {
      console.log(res.body);
    }
  );

needle.post(
    'http://localhost:3000/add-book',
    { bookName: 'Harry Potter and the Chamber of Secrets', isbn: "0-7475-3849-2",author: "J.K Rowling", yearPublished: "1998"},   // can be an object or a string
    (err, res) => {
      console.log(res.body);
    }
);

needle.post(
    'http://localhost:3000/add-book',
    { bookName: 'The Little Prince', isbn: "978-0156012195",author: "Antoine Saint-Exuper", yearPublished: "1943"},   // can be an object or a string
    (err, res) => {
      console.log(res.body);
    }
);

needle.get('http://localhost:3000/find-by-author?author=J.K+Rowling', (err, res) => {
    console.log(res.body);   // prints the body of the response message. In this case, “Hello”
});

