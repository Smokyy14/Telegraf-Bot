# Telegram-Bot
A simple Telegram bot built with JavaScript and powered by Telegraf.

## 📌 Overview
This repository contains a lightweight and functional base for a Telegram bot using the Telegraf library.
It focuses on simplicity and is ideal for small projects or as a starting point for more complex bots. The bot can respond to messages, execute basic commands like `/menu`, and display a list of available features.

## 🔧 Features
* 🤖 Telegram bot using Telegraf
* 🧱 Minimal and easy-to-read code structure
* 💬 Responds to `/start`, "Ping", and `/menu` commands
* 🔄 Auto-reloads with `nodemon` on file changes
* 🚀 **Getting Started**
    1. Clone the repository
    ```bash
    git clone [https://github.com/Smokyy14/Telegram-Bot.git](https://github.com/Smokyy14/Telegram-Bot.git)
    cd Telegram-Bot
    ```
    2. Install dependencies
    ```bash
    npm install
    ```
    3. Start the bot in development mode
    ```bash
    npm run dev
    ```
    This will start the bot using `nodemon`, which auto-restarts when changes are detected.

## 📂 Project Structure
```bash
Telegram-Bot/
├── commands/          # Commands organized by category
│   └── general/       # Includes /menu command
├── bot.js             # Main entry point of the bot
├── package.json       # Project metadata and dependencies
└── README.md          # This file

## 📖 Example Commands
- /start
Greets the user with a welcome message.

- Ping ( without slash )
Replies with Pong! without needing a slash command.

- /menu
Displays the list of available commands.

## 🧩 Adding New Commands
- To add a new command:

Create a .js file inside commands/general/.
Export an object with an execute function. Example:

```JavaScript
// commands/general/hello.js
module.exports = {
  execute(ctx) {
    ctx.reply("Hello there!");
  }
};
```

Then register it in bot.js like this:
JavaScript

const hello = require("./commands/general/hello");
bot.command("hello", (ctx) => hello.execute(ctx));
🧪 Contributing
Have suggestions or want to improve it?

Fork the repo
Create your feature branch:
Bash

git checkout -b my-feature
Commit your changes:
Bash

git commit -m 'Add some feature'
Push to your branch and open a pull request
📄 License
This project is licensed under the MIT License. Feel free to use and modify it for your own projects.

📬 Contact
Email: fdsmdfr985@gmail.com
Twitter: @StarsOnThaSky

Made with ❤️ for developers who want to create simple bots quickly and easily.
