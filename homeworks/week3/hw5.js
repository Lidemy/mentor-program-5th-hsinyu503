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
  let arrLength = Number(lines[0])
  for (let i=1; i<= arrLength; i++) {
      let [a, b, k] = lines[i].split(' ')
      if (k == 1) {
          if (BigInt(a) > BigInt(b)) {
              console.log('A')
          } else if (BigInt(a) === BigInt(b)) {
              console.log('DRAW')
          } else {
              console.log('B')
          }
      } else {
          if (BigInt(a) > BigInt(b)) {
              console.log('B')
          } else if (BigInt(a) === BigInt(b)) {
              console.log('DRAW')
          } else {
              console.log('A')
          }
      }
  }
}