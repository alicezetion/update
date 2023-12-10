exports.leiamnash = async function({ alice, api, axios, bot, cache, database, event, font, fs, language, log, message, path, scraper, wrapper }) {
try {
 const leiamA = [ "hi", "hello", "yahalo", "yahallo", "heyo", "hii", "hey", "hola", "ola", "halo", "sup", "zup", "hai", "wazap", "halow", "yo", "yow", "yowzup", "hilo", "konnichiwa", "helo", "hallo", "hayo", "konbanwa", "moshi moshi", "minna" ]
 const leiamX = [ "hello", "hi", "hey", "hola", "sup" ]
 const leiamZ = [ "👋", "✋", "👐", "🤚" ]
 const leiamW = [ "❤️", "🧡", "💛", "💚", "💙", "🤎", "🖤", "🤍" ]
leiamA.forEach(leiam => {
if (event.body.toLowerCase().startsWith(leiam)) {
(async function() {
  const leiamY = (await bot.getUserInfo(event.senderID))[event.senderID].name;
  return message(await font (`${leiamX[Math.floor(Math.random() * leiamX.length)]} ${leiamY} how are you today?\n\ndon't be shy to chat with me if you're bored honey ${leiamW[Math.floor(Math.random() * leiamW.length)]}`), `${leiamZ[Math.floor(Math.random() * leiamZ.length)]}`);
    })();
   }
  });
 } catch(error) {}
