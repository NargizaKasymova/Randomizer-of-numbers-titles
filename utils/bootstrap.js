const { Telegraf } = require('telegraf')
const bot = new Telegraf('1611505493:AAF4ARqikvvqQDEXcfBN6Hc4F9BCWvbbGBE')
bot.launch()
console.log('Bot has been started')
module.exports = bot