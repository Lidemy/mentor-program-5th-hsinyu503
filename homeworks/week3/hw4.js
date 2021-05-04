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
  const str = lines[0]
  console.log(reverse(str) ? 'True' : 'False')
}

function reverse(str) {
  let result = ''
  for (let i = str.lenght - 1; i >= 0; i--) {
    result += str[i]
  }
  return result
}
