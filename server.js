const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.set({
    'Content-Type': 'text/html;charset=utf-8',
    'Content-Encoding': 'gzip',
    'Transfer-Encoding': 'chunked'
  });
  fs.readFile(path.resolve(__dirname, './dist/index.html'), (err, data) => {
    res.send(data.toString());
  })
})

let server = app.listen(3000, () => {
  console.log('server on 3000.');
})