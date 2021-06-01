const { Markup } = require('telegraf')

module.exports.startKb = () => 
    Markup.keyboard([
        ['Числа от 1 до 100', 'Цитаты'],
        ['Орел/Решка', 'Игральные кости']
    ]).resize()