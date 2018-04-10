const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const template = require('art-template');

app.engine('.html', template.__express);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.redirect('/output');
});

app.get('/input', (req, res) => {
  res.render('input', {
    title: 'input page'
  });
});

app.post('/input', (req, res) => {
  let pathname = path.join(__dirname, 'views/data.json');
  let body = JSON.stringify(req.body);
  // console.log(body);
  body = body.substring(2,body.length-5).replace(/\\/g,'');

  fs.writeFile(pathname, body, (err) => {
    if (err) throw err;
    res.redirect('/output');
  });
});

app.get('/output', (req, res) => {
  let pathname = path.join(__dirname, 'views/data.json');
  // console.log(pathname);
  fs.readFile(pathname, (err, data) => {
    if (err) throw err;
    // console.dir(JSON.parse(data.toString()));
    let obj = {title: 'resume generator'};
    obj.data = JSON.parse(data.toString());
    res.render('output', obj);
  });
})

app.use((req, res) => {
  res.status(404);
  res.send('404 not found');
});

app.listen(3000);
console.log('Resume-generator is running on http://localhost:3000. Please open the broswer.');