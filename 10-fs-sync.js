const {readFileSync, writeFileSync} = require('fs');
console.log('start')

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

writeFileSync('./content/result.txt', `Here are the results of the write fle: 1..${first} 2..${second} 3..`, { flag: 'a' })

console.log('done with the task')
console.log('starting the next one')