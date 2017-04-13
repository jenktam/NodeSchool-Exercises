// 1. Hello World
// console.log('HELLO WORLD');

// 2. Baby Steps
// function findSum(){
//   process.argv[0] = 'node';
//   var total = 0;

//   for(var i = 2; i < process.argv.length; i++) {
//     total += Number(process.argv[i]);
//   }

//   return total;
// }

// console.log(findSum());

// Actual Solution
// var result = 0

// for (var i = 2; i < process.argv.length; i++)
//   result += Number(process.argv[i])

// console.log(result)mk

// // 3. My First I/O!
// var fs = require('fs');
// var contents = fs.readFileSync(process.argv[2]);
// var lines = contents.toString().split('\n').length - 1;


// console.log(lines);
// var str = buf.toString();
// str.readFileSync('file:///home/jen/.npm-global/lib/node_modules/learnyounode/node_apidoc/buffer.html');

//  4) ## MY FIRST ASYNC I/O! (Exercise 4 of 13)
// instead of return value from method, will use return value from a callback function in the 2nd argument

// var fs = require('fs');
// fs.readFile(process.argv[2], function(err, data){
//   if(err) {
//     return console.log(err);
//   } else {
//     var lines = data.toString().split('\n').length - 1;
//     console.log(lines);
//   }
// });

// 5)  ## FILTERED LS (Exercise 5 of 13)
var fs = require('fs');
var directory = process.argv[2];

fs.readdir(directory, function(err, list){
  if(err) {
    console.log(err);
  } else {
    for(var i = 0; i < list.length; i++) {
      //console.log(list[i]);
      // ensure files only included if file extension provided matches directory files name AFTER the "."
      if(list[i].indexOf(".") !== -1) {
        if((list[i].substr(list[i].indexOf(".") + 1) === process.argv[3])) { //txt
          console.log(list[i]);
        }
      }
    }
  }
});

// Nodeschool Solution:
// uses path and extname method which may be better for handling weird edge cases. More stable
    var fs = require('fs')
    var path = require('path')

    var folder = process.argv[2]
    var ext = '.' + process.argv[3]

    fs.readdir(folder, function (err, files) {
      if (err) return console.error(err)
      files.forEach(function (file) {
        if (path.extname(file) === ext) {
          console.log(file)
        }
      })
    })


/*
Quick way to view files

left of > sign: everything want to print and view in VSCode.
>: will print everything to the left of it in a new file to the right and name that file according to the text
right of >: js file name

Then view code in VSCode but running: code verify.js

*/
learnyounode verify program.js > verify.js
$ code verify.js

// 1 line substitute to create and open printed verify information from learnyounodein VSCode
learnyounode verify program.js > verify-again.js && code verify-again.jsjen@jen-GE72-2QD ~/Documents/Dev/learnNode $ rm printToFile

