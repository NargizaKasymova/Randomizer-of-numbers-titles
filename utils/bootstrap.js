const { Telegraf } = require('telegraf')
const bot = new Telegraf('1808961286:AAHVcH70cSuVi7zdayFLgPO7BBpCCAu2w1g')
bot.launch()
console.log('Bot has been started')
module.exports = bot