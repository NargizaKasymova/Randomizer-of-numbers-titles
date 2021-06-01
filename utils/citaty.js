const titles = [
    'Отчаянье порождает смелость',
    'Хороший полководец побеждает за счет врага',
    'Лучшее - враг хорошего',
    'Добро побеждает зло',
    'Ырыс алды ынтымак'
]

module.exports.chooseTitle = () => {
    return titles[Math.floor(Math.random()*titles.length)]
} 