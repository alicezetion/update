var alice = {
 command: "say",
 type: "prefix",
 author: "leiamnash",
 restrict: "none",
 cooldown: 5
}

async function command({ alice, api, axios, bot, cache, chat, database, event, font, fs, language, log, message, path, scraper, wrapper }) {
try {
   if (!chat) return message(await font(language.missing.replace(/\{(\d+)\}/g, alice.prefix + this.alice.command)), "🗨️");
 const leiamA = `${cache}say_${event.senderID}.mp3`;
  bot.react("✅", event.messageID, (err) => {}, true);
  const leiamB = (await axios.get(`https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(chat)}&tl=tl&client=tw-ob`, { responseType: 'arraybuffer' })).data;
	fs.writeFileSync(leiamA, Buffer.from(leiamB, 'utf-8'));   
  return bot.chat({
    body: await font(chat), 
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
