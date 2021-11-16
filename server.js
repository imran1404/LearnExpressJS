const express = require('express');

const app = express();

const path = require('path')

const mainRouter = require('./routes')

const PORT = process.env.PORT || 3000;

// how to use template view engine ejs

app.set('view engine', 'ejs');

// console.log(app.get('views'))

// Static middleware 

app.use(express.static('public'));

// router code - we can add prefix /en like this or not.

app.use('/', mainRouter);

// Common route method

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname) + '/index.html');
// });

// when using view engine we have to write like below using render instead send file and simple file name

// app.get('/', (req, res) => {
//     res.render('index', {
//         title: "my home page"
//     });
// });

// for download file - we have to change the res.sendfile to res.download and 
// provide the file or download item location using path method

// app.get('/', (req, res) => {
//     res.download(path.resolve(__dirname) + '/index.html');
// });

// Calling to server

app.listen(PORT, () => {
    console.log(`This site is hosted on localhost:${PORT}`)
})