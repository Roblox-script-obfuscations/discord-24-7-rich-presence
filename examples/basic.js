client.user.setPresence({
  status: "online", // online, idle, dnd, invisible
});

client.user.setActivity("Pac Mean?", {
  type: "PLAYING", // Can also be STREAMING, LISTENING, WATCHING, COMPETING
});

client.user.setActivity("Hardstuck info", {
  type: "WATCHING",
});

client.user.setActivity("custom Non-Player Character", {
  type: "LISTENING",
});

client.user.setActivity("Pac Mean?", {
  type: "STREAMING",
  url: "https://www.youtube.com/live/WlgeUXlOMTc?si=ayq_XMB8y8O5ytnX", // Needs to be a valid streaming URL
});
