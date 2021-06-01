module.exports.greetings = ['Привет', 'привет', 'Здравствуйте', 'здравствуйте']
module.exports.greeting = (ctx) => 
    `${ctx.message.text}, ${ctx.message.from.first_name}`
