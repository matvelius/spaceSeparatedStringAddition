let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

let lineIndex = 0
let arrayLength = 0
let firstNum = 0
let secondNum = 0

rl.on('line', function (line) {

    if (lineIndex == 0) {

        arrayLength = parseInt(line) // unnecessary?
        lineIndex += 1

    } else if (lineIndex == 1) {

        firstNum = parseInt(line.replace(/\s/g, ''))
        lineIndex += 1

    } else {

        secondNum = parseInt(line)
        const sum = firstNum + secondNum

        console.log(String(sum).split('').join(' '))

        rl.close()
    }
})