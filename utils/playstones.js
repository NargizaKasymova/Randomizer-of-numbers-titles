const numbers = [1, 2, 3, 4, 5, 6]
module.exports.getNumber = () => {
    return numbers[Math.floor(Math.random()*numbers.length)]
} 