const TelegramApi = require('node-telegram-bot-api')
const token = '5879686479:AAFzmNYe7o2bTsVCNJzH4Npnbbc3yzqThd4'
const bot = new TelegramApi(token, {polling: true})
const startBot = async() => {
    bot.setMyCommands([
        {command: '/start', description: 'Начальное приветствие'},
        {command: '/reg', description: 'Регистрация'},
        {command: '/login', description: 'Вход'},
        {command: '/freegame', description: 'Бесплатный турик'},
        {command: '/paygame', description: 'Платный турик'},
        {command: '/unipass', description: 'Unipass'},
        
    ])
        
    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;
        
        try {
            if (text === '/start') {
                bot.sendMessage(chatId, 'Да')
            } 
        } catch(e) {console.log(e)}
    })
    
}
startBot()
