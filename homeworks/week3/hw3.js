var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin
});

var lines = []

rl.on('line', function (line) {
  lines.push(line)
});

rl.on('close', function() {
  solve(lines)
})

function solve(lines) {

  let total = Number(lines[0])

  for( let i=1; i<=total; i++ ){

      let nowNumber = Number(lines[i])

      if( isPrime(nowNumber) ){
          console.log('Prime')
      } else {
          console.log('Composite')
      }
  }

}

function isPrime(n) {
  if (n === 1) return false
  for (let i=2; i<n; i++) {
      if (n % i === 0) {
          return false
      }
  }
  return true
}
