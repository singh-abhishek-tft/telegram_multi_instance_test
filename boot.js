const { Telegraf } = require('telegraf');
const { TelegramDriver } = require('./telegram');
require('dotenv').config();

const telegramDriver = new TelegramDriver();

const { TELEGRAM_TOKEN_1, TELEGRAM_TOKEN_2 } = process.env;

const bot1 = new Telegraf(TELEGRAM_TOKEN_1, {
  polling: true
});

const bot2 = new Telegraf(TELEGRAM_TOKEN_2, {
  polling: true
});

bot1.launch();
bot2.launch();

bot1.on('text', async (ctx) => {
  await telegramDriver.sendRaw('hello from instance 1', ctx);
});

bot2.on('text', async (ctx) => {
  await telegramDriver.sendRaw('hello from instance 2', ctx);
});
