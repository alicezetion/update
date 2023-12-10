var alice = {
 command: "stalk",
 type: "prefix",
 author: "leiamnash",
 restrict: "none",
 cooldown: 5
}

async function command({ alice, api, axios, bot, cache, chat, database, event, font, fs, language, log, message, path, scraper, wrapper }) {
try {
    let leiam;
  if (Object.keys(event.mentions)[0]) leiam = Object.keys(event.mentions)[0];
  if (!chat) leiam = event.senderID;
  const leiamA = `${cache}stalk_${event.senderID}.png`; 
bot.react("✅", event.messageID, (err) => {}, true);
  const leiamX = (await bot.getUserInfo(leiam))[leiam];
    const leiamW = [
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 13_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Safari/605.1.15",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
]
 const leiamZ = (await axios.get(`https://graph.facebook.com/${leiam}/picture?width=540&height=540&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { 
   responseType: "arraybuffer",
   muteHttpExceptions: true,
   headers: {
    authority: "graph.facebook.com",
      "cache-control": "max-age=0",
      "sec-ch-ua-mobile": "?0",
      "user-agent": leiamW[Math.floor(Math.random() * leiamW.length)]
  }
 })).data;
fs.writeFileSync(leiamA, Buffer.from(leiamZ, 'utf-8'));

return bot.chat({
  body: await font(`${leiamX.name}\n\nfirstname: ${leiamX.firstName}\ntype: ${leiamX.type}\nvanity: ${leiamX.vanity || "no data"}\nUID: ${leiam}\nprofile: ${leiamX.profileUrl}\n\nprofile picture:`),
  attachment: fs.createReadStream(leiamA)
}, event.threadID, (err) => {
  if (err) return bot.chat(`[ ${this.alice.command} ] » ${language.error}`, event.threadID, event.messageID);
  fs.unlinkSync(leiamA);
 }, event.messageID);
} catch (error) {
 log.error(`[ ${this.alice.command} ] » ${error}`);
 return bot.chat(`[ ${this.alice.command} ] » ${language.error}`, event.threadID, event.messageID);
 }
}

module["exports"] = {
  alice,
  command
}
