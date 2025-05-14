const fs = require("fs");
const path = require("path");

module.exports = {
  name: 'menu',
  alias: ["commands"],
  category: "General",
  description: 'Show all commands',
  execute: (ctx) => {
  const commandsPath = path.join(__dirname, "..");
  let commands = [];

  function getAllCommands(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
            getAllCommands(fullPath);
    } else if (entry.isFile() && entry.name.endsWith(".js")) {
        const command = require(fullPath);
        commands.push(command);
        }
      }
    }

    getAllCommands(commandsPath);

    const visibleCommands = commands.filter(cmd => !cmd.hidden && !cmd.dev);

    if (!visibleCommands.length) {
        return ctx.reply("There's no commands availables.");
    }

    // Categorize commands
    const categorized = visibleCommands.reduce((acc, cmd) => {
    const category = cmd.category || "No category assigned";
    const subcategory = cmd.subcategory || "General";

    if (!acc[category]) acc[category] = {};
    if (!acc[category][subcategory]) acc[category][subcategory] = [];

    acc[category][subcategory].push(cmd);
    return acc;
  }, {});

  let text = `📖 *COMMAND MENU*\n\n`;

  for (const [category, subcats] of Object.entries(categorized)) {
    text += `\n*${category}*\n`;

    for (const [subcat, cmds] of Object.entries(subcats)) {
      if (subcat !== "General") text += `\n\`\`\`${subcat}:\`\`\`\n`;

      for (const cmd of cmds) {
        text += `• \`/${cmd.name || "Unknown"}\` - ${cmd.description || "No description provided"}\n`;
      }
    }
  }

  ctx.reply(text, { parse_mode: "Markdown" });
  }
}