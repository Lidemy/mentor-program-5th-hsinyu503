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
  const total = Number(lines[0])
  for (let i = 1; i <= total; i++) {
    const nowNumber = Number(lines[i])
    console.log(isPrime(nowNumber) ? 'Prime' : 'Composite')
  }
}

function isPrime(n) {
  if (n === 1) return false
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}
