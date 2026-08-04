const { RichPresence } = require("discord.js-selfbot-v13");

const activity = new RichPresence(client)
  .setName("Pac Mean?")
  .setDetails("custom Non-Player Character")
  .setState("Hardstuck info")
  .setApplicationId("1515613131919986688")
  .setAssetsLargeImage("mp:external/https%3A%2F%2Fi.pinimg.com%2F736x%2F3b%2Fba%2Ff1%2F3bbaf16f3ca53bd03e39e73a2baf00ce.jpg")
  .setAssetsLargeText("How?")
  .setAssetsSmallImage("")
  .setAssetsSmallText("")
  .setStartTimestamp(new Date())
  .setButtons(
    { name: "My site", url: "https://ftap-com.vercel.app/" },
    { name: "pls click to now", url: "https://i.pinimg.com/736x/22/32/ef/2232ef531384abba38738724976e1b6f.jpg" }
  );

client.user.setPresence({
  activities: [activity.toJSON()],
  status: "online"
});
