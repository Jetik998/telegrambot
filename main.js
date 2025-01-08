import { Telegraf, Markup } from 'telegraf'

const token = '8149375289:AAFBGe0TSYQ_xpXPToZQgX8vl3yeEYTPcBw'
const webAppUrl = 'https://whiteclock.ru'

// Инициализация бота
const bot = new Telegraf(token)

// Команда /start
bot.command('start', (ctx) => {
  ctx.reply(
    'Добро пожаловать! Нажмите на кнопку ниже, чтобы запустить приложение 🚀',
    Markup.keyboard([
      // Кнопка с WebApp и эмодзи
      [Markup.button.webApp('Перейти на сайт 🌍', `${webAppUrl}/feedback`)],
      
      // Дополнительные кнопки с эмодзи
      [Markup.button.callback('Помощь 💬', 'help')],
      [Markup.button.callback('Контакты 📞', 'contacts')],
    ])
    .resize() // Подгоняет размер кнопок под экран
  )
})

// Обработка нажатия на кнопки callback
bot.action('help', (ctx) => {
  ctx.reply('Напишите нам, если нужна помощь! 📧')
})

bot.action('contacts', (ctx) => {
  ctx.reply('Наши контакты: email@domain.com 📱')
})

// Запуск бота, привязка к порту (для платформ, как Render)
const port = process.env.PORT || 10000
bot.launch({
  webhook: {
    domain: 'https://telegrambot-xhbu.onrender.com',  // Замените на ваш URL на Render
    port: port
  }
}).then(() => {
  console.log('Bot is running...');
})
