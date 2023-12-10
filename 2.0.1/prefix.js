exports.leiamnash = async function({ alice, api, axios, bot, cache, database, event, font, fs, language, log, message, path, scraper, wrapper }) {
try {
 const leiamA = [ "prefix", "prefex", "prifex", "prifix" ]
 const leiamW = [ "❤️", "🧡", "💛", "💚", "💙", "🤎", "🖤", "🤍" ]
leiamA.forEach(leiam => {
if (event.body.toLowerCase().startsWith(leiam)) {
(async function() {
  const leiamY = (await bot.getUserInfo(event.senderID))[event.senderID].name;
  return message(await font (`prefix: ${alice.prefix}\nplease don't forget my prefix honey ${leiamY}\n\nuse ⟨ ${alice.prefix}help ⟩ for commands list`), `${leiamW[Math.floor(Math.random() * leiamW.length)]}`);
    })();
   }
  });
 } catch (error) {}
}
