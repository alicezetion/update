var alice = {
 command: "translate",
 type: "prefix",
 author: "leiamnash",
 restrict: "none",
 cooldown: 5
}

async function command({ alice, api, axios, bot, cache, chat, database, event, font, fs, language, log, message, path, scraper, wrapper }) {
try {
   let leiam;
 if (event.type == "message_reply" ) leiam = event.messageReply.body;
 if (chat) leiam = chat;
 const leiamA = `${cache}translate_${event.senderID}.mp3`;
  const leiamB = (await axios.get(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=${encodeURI(leiam)}`)).data;
		var leiamC = "";
leiamB[0].forEach(leiamnash => (leiamnash[0]) ? leiamC += leiamnash[0] : "");
  const leiamD = (await axios.get(`https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(leiamC)}&tl=en&client=tw-ob`, { responseType: 'arraybuffer' })).data;
	fs.writeFileSync(leiamA, Buffer.from(leiamD, 'utf-8'));   
  return bot.chat({
    body: await font(`English: ${leiamC}`), 
    attachment: fs.createReadStream(leiamA)
  }, event.threadID, (err) => {
    if (err) return bot.chat(leiamC, event.threadID, event.messageID);
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
