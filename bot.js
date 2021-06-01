const bot = require('./utils/bootstrap')
const { startKb } = require('./utils/buttons')
const { greetings, greeting } = require('./utils/greeting')
const { randomize } = require('./utils/rnd100')
const { chooseTitle } = require('./utils/citaty')
const { getResult } = require('./utils/orelreshka')
const { getNumber } = require('./utils/playstones')

const { numbers, titles, dices, getOrelReshka }  = require('./utils/class')

bot.start(ctx => ctx.reply('Приветствуем Вас!', startKb()))
bot.hears(greetings, ctx => ctx.reply(greeting(ctx)))

//Вариант А - без класса
// bot.hears('Числа от 1 до 100', ctx => ctx.reply(randomize(ctx)))
// bot.hears('Цитаты', ctx => ctx.reply(chooseTitle()))
// bot.hears('Орел/Решка', ctx => ctx.reply(getResult()))
// bot.hears('Игральные кости', ctx => ctx.reply(getNumber()))

//Вариант Б - с классом
bot.hears('Числа от 1 до 100', ctx => ctx.reply(numbers.randomizer()))
bot.hears('Цитаты', ctx => ctx.reply(titles.randomizer()))
bot.hears('Орел/Решка', ctx => ctx.reply(getOrelReshka.randomizer()))
bot.hears('Игральные кости', ctx => ctx.reply(dices.randomizer()))
