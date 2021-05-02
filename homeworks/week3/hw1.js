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
  for(var i=1; i<=lines; i++){
    var result = ''
    for(var j=1; j<=i; j++){
      result += '*'
    }
    console.log(result)
  }
}