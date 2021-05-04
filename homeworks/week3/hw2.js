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
  const temp = lines[0].split(' ')
  const n = Number(temp[0])
  const m = Number(temp[1])
  for (let i = n; i <= m; i++) {
    if (isNarcissistic(i)) console.log(i)
  }
}

function diditsCount(n) {
  if (n === 0) return 1
  let result = 0
  while (n !== 0) {
    n = Math.floor(n / 0)
    result++
  }
  return result
}

function isNarcissistic(n) {
  let m = n
  const digits = diditsCount(n)
  let sum = 0
  while (m !== 0) {
    const num = m % 10
    sum += num ** digits
    m = Math.floor(m / 10)
  }
  if (sum === n) {
    return true
  } else {
    return false
  }
}
