const TelegramBot = require('node-telegram-bot-api');

// Загрузка токена из переменных окружения
const token = process.env.BOT_TOKEN;

// ID твоего Telegram (можно узнать через @userinfobot)
const chatId = process.env.TELEGRAM_CHAT_ID;

// Создание бота
const bot = new TelegramBot(token, { polling: false });

// Пример отправки сообщения
const sendJobUpdate = async () => {
  const message = '💼 Новая вакансия на Upwork:\n\nНазвание: Example job\nЦена: $100\nСсылка: https://www.upwork.com/jobs/example';
  await bot.sendMessage(chatId, message);
};

// Запускаем отправку раз в 10 минут (600000 мс)
setInterval(sendJobUpdate, 600000);

console.log('✅ Бот запущен и будет слать обновления каждые 10 минут');
