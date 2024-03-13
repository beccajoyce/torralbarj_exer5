import express from 'express';
import { appendFileSync, readFile} from 'node:fs';

// instantiate the server
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// this tells our app to listen for GET messages on the '/' path
// the callback function specifies what the server will do when a message is received
// app.get('/', (req, res) => {
//     //console.log(req);
//     //console.log(res);
//     res.send('Hello!');
// });

// app.post('/submit-data', (req, res) => {
//     res.send('Received a POST request.' + req.body.name);
// });

// app.get('/greeting', (req, res) => {
//   res.send('Hello ' + req.query.name);
// });

// this tells our server to listen to the port 3000
// we can also pass an optional callback function to execute after the server starts


//Start of the Exercise
app.post('/add-book', (req, res) => {
    //save to a file 
    var check = true;
    var details = [];

    details[0] = req.body.bookName;
    details[1] = req.body.isbn
    details[2] = req.body.author
    details[3] = req.body.yearPublished

    if(details.length !=4){ //incomplete fields
        res.send({success:false});
    }

    //check if there is a non-empty string
    if(details[0].length == 0){
        check = false;
    }

    if(details[1].length == 0) {
        check = false;
    }

    if(details[2].length == 0) {
        check = false;
    }
    
    if(details[3].length == 0) {
        check = false;
    }
    
    if(check){
        //save the data on a file 
    
        appendFileSync('books.txt', details.join(","));
        appendFileSync('books.txt','\n');

        console.log('The "data to append" was appended to file!');

        res.send({success:true});
    } else {
        res.send({success:false});
    }
 
});

app.get('/find-by-isbn-author', (req, res) => {
    readFile('books.txt', 'utf8', (err,data) =>{
      if (err) throw err;
  
      var lines = data.split("\n");
      var result = [];
  
      lines.forEach(line => {
          var line_element = line.split(',');
  
          if(line_element.indexOf(req.query.author) == 2 && line_element.indexOf(req.query.isbn) == 1){
              console.log('Found it:' + line);
              result.push(line);
          }
    });
    res.send(result);
  });
});


app.get('/find-by-author', (req, res) => {
  readFile('books.txt', 'utf8', (err,data) =>{
    if (err) throw err;

    var lines = data.split("\n");
    var result = [];

    lines.forEach(line => {
        var line_element = line.split(',');

        if(line_element.indexOf(req.query.author) == 2){
            console.log('Found it:' + line);
            result.push(line);
        }
  });
  res.send(result);
});
});


app.listen(3000, () => { console.log('Server started at port 3000')} );
