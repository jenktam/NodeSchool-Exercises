// 2. Baby Steps
function findSum(){
  process.argv[0] = 'node';
  var total = 0;

  for(var i = 2; i < process.argv.length; i++) {
    total += Number(process.argv[i]);
  }

  return total;
}

console.log(findSum());

//// Actual Solution
// var result = 0

// for (var i = 2; i < process.argv.length; i++)
//   result += Number(process.argv[i])

// console.log(result);
