const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin
})

const lines = []

rl.on('line', (line) => {
  lines.push(line)
})

rl.on('close', () => {
  solve(lines)
})

function solve(lines) {
  for (let i = 1; i <= lines[0]; i++) {
    let result = ''
    for (let j = 1; j <= i; j++) {
      result += '*'
    }
    console.log(result)
  }
}
