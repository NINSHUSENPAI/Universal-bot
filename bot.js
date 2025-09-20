const mineflayer = require("mineflayer");

function createBot() {
  const bot = mineflayer.createBot({
    host: "lunarsmp-ub2P.aternos.me", // Your Aternos server IP
    port: 39396, // Your Aternos server port
    username: "AFK_bot" // Cracked server username
  });

  bot.on("spawn", () => {
    console.log("✅ AFK_bot joined the server and keeping it alive!");

    // Prevent AFK kick by jumping every 10 seconds
    setInterval(() => {
      bot.setControlState("jump", true);
      setTimeout(() => bot.setControlState("jump", false), 500);
    }, 10000);
  });

  bot.on("end", () => {
    console.log("❌ Bot disconnected! Reconnecting in 5 seconds...");
    setTimeout(createBot, 5000);
  });

  bot.on("error", err => console.log("⚠️ Bot error:", err));
}

createBot();
