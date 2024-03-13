import needle from 'needle';

// needle.get('http://localhost:3000/', (err, res) => {
//     console.log(res.body);   // prints the body of the response message. In this case, “Hello”
// });


// needle.get('http://info.cern.ch/hypertext/WWW/TheProject.html', (err, res) => {
//     console.log(res.body);   // prints an HTML string
// });

needle.get('http://localhost:3000/greeting?name=Becca', (err, res) => {
    console.log(res.body);   // prints the body of the response message. In this case, “Hello”
});
