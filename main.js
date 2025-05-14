const { Telegraf } = require("telegraf");

// Nodemon is an npm package that detects any changes in your files and automatically restarts the session.
// It's convenient so you don't have to keep closing and reopening sessions.
// Any change in the code will be detected and the session will be restarted.

const BOT_TOKEN = process.env.BOT_TOKEN; // Make sure to create a .env file and add your bot token there
const bot = new Telegraf(BOT_TOKEN);

const menu = require("./commands/general/menu.js");

bot.start((ctx) => {
  ctx.reply("Hello! I'm your bot. Use /menu to see available commands.");
});

bot.hears("Ping", (ctx) => { // If u send "Ping" in the chat, the bot will respond with "Pong!", without the need to use the slash ( / )
  ctx.reply("Pong!");
});
bot.command("menu", (ctx) => menu.execute(ctx));

bot.launch();
