const results = ['Орел', 'Решка']
module.exports.getResult = () => {
    return results[Math.floor(Math.random()*results.length)]
} 