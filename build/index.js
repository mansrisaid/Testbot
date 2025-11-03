import express from "express";
import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token);
const PORT = process.env.PORT || 3000;

// نقطة استقبال من Telegram Webhook
app.post(`/bot${token}`, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

// تفاعل البوت
bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text?.toLowerCase() || "";

  if (text === "/start") {
    bot.sendMessage(chatId, "👋 أهلاً بك في البوت!");
  } else {
    bot.sendMessage(chatId, `📩 قلت: ${text}`);
  }
});

app.get("/", (req, res) => {
  res.send("✅ Bot is running on Render!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
