const { RichPresence } = require("discord.js-selfbot-v13");

// Values below are taken from your exported Vencord "CustomRPC" settings
const activity = new RichPresence(client)
 .setName("Pac Mean?") // appName
 .setDetails("custom Non-Player Character") // details
 .setState("Hardstuck info") // state  ← 修正したステータス
 .setApplicationId("1515613131919986688") // appID
 .setAssetsLargeImage("mp:external/https%3A%2F%2Fi.pinimg.com%2F736x%2F3b%2Fba%2Ff1%2F3bbaf16f3ca53bd03e39e73a2baf00ce.jpg") // imageBig
 .setAssetsLargeText("How?") // imageBigTooltip
 .setAssetsSmallImage("") // imageSmall (空)
 .setAssetsSmallText("") // imageSmallTooltip (空)
 .setStartTimestamp(Date.now()) // timestampMode: 3
 .setButtons(
 { name: "My site", url: "https://ftap-com.vercel.app/" }, // buttonOne
 { name: "pls click to now", url: "https://i.pinimg.com/736x/22/32/ef/2232ef531384abba38738724976e1b6f.jpg" } // buttonTwo
 );

client.user.setPresence({
 activities: [activity.toJSON()],
 status: "online"
});
