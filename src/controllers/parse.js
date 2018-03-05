var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('./dist/index.html', 'utf8');
var options = { format: 'Letter' };
 
pdf.create(html, options).toFile('./dist/dk.pdf', function(err, res) {
  if (err) return console.log(err);
  console.log(res); // { filename: '/app/businesscard.pdf' }
});

// var init = (function() {
//   pdf.create(html, options).toFile('../../dist/dk.pdf', function(err, res) {
//     if (err) return console.log(err);
//     console.log(res); // { filename: '/app/businesscard.pdf' }
//   });
// })();

// module.exports = {
//   init: init
// }