//  4) ## MY FIRST ASYNC I/O! (Exercise 4 of 13)
// instead of return value from method, will use return value from a callback function in the 2nd argument

var fs = require('fs');
fs.readFile(process.argv[2], function(err, data){
  if(err) {
    return console.log(err);
  } else {
    var lines = data.toString().split('\n').length - 1;
    console.log(lines);
  }
});
