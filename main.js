import { Telegraf, Markup } from 'telegraf'

const token = '8149375289:AAFBGe0TSYQ_xpXPToZQgX8vl3yeEYTPcBw'
const webAppUrl = 'https://whiteclock.ru'

const bot = new Telegraf(token)

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
  ctx.reply('Напишите нам, если нужна помощь! 📧');
});

bot.action('contacts', (ctx) => {
  ctx.reply('Наши контакты: email@domain.com 📱');
});

bot.launch()
