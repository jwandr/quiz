// Namibia Road Trip Quiz — Emoji Decode rebuild
// The original 91 Emoji Decode questions (spread across earlier files) were
// too vague/vibes-based rather than literal rebuses, and had no visible theme.
// This file removes them IN PLACE (QUESTIONS is declared with const in
// questions.js, so we can't reassign it — .splice() mutates it instead)
// and replaces them with themed, logical rebus puzzles (Film / TV Series /
// Book / Phrase / Actor), each with the decode logic in the reveal.
// Load this file AFTER every other questions-*.js file.
for (var i = QUESTIONS.length - 1; i >= 0; i--) {
  if (QUESTIONS[i].cat === "Emoji Decode") { QUESTIONS.splice(i, 1); }
}

QUESTIONS.push.apply(QUESTIONS, [
  {
    "id": 1381,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "FILM — 🔍🐠",
    "a": "Finding Nemo",
    "fact": "🔍 = Finding (searching), 🐠 = Nemo (a clownfish)"
  },
  {
    "id": 1382,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "FILM — 🔍🔵🐟",
    "a": "Finding Dory",
    "fact": "🔍 = Finding, 🔵🐟 = Dory (a blue fish)"
  },
  {
    "id": 1383,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "FILM — 🦁👑",
    "a": "The Lion King",
    "fact": "🦁 = Lion, 👑 = King (crown)"
  },
  {
    "id": 1384,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "FILM — 🚢🧊",
    "a": "Titanic",
    "fact": "🚢 = ship, 🧊 = the iceberg it hit"
  },
  {
    "id": 1385,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "FILM — 🦈",
    "a": "Jaws",
    "fact": "The shark itself — the whole film is basically the icon"
  },
  {
    "id": 1386,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "FILM — ❄️👸",
    "a": "Frozen",
    "fact": "❄️ = frozen/ice, 👸 = the princess"
  },
  {
    "id": 1387,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "FILM — 🕷️👨",
    "a": "Spider-Man",
    "fact": "🕷️ = spider, 👨 = man"
  },
  {
    "id": 1388,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "FILM — 🦇👨",
    "a": "Batman",
    "fact": "🦇 = bat, 👨 = man"
  },
  {
    "id": 1389,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "FILM — 🧸📖",
    "a": "Toy Story",
    "fact": "🧸 = toy, 📖 = story"
  },
  {
    "id": 1390,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "FILM — 🎈🏠",
    "a": "Up",
    "fact": "Balloons lifting the house — the film's whole premise in two emoji"
  },
  {
    "id": 1391,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "FILM — 🚗🏁",
    "a": "Cars",
    "fact": "🚗 = car, 🏁 = racing"
  },
  {
    "id": 1392,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "FILM — 🧙‍♂️🌪️",
    "a": "The Wizard of Oz",
    "fact": "🧙‍♂️ = wizard, 🌪️ = the tornado that starts it all"
  },
  {
    "id": 1393,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "FILM — 🏠1️🧒",
    "a": "Home Alone",
    "fact": "🏠 = home, 1️⃣ = alone (just the one), 🧒 = the kid"
  },
  {
    "id": 1394,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "FILM — 👽📞🏠",
    "a": "E.T.",
    "fact": "👽 = alien, 📞🏠 = phoning home"
  },
  {
    "id": 1395,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "FILM — 🦖🏞️",
    "a": "Jurassic Park",
    "fact": "🦖 = dinosaur, 🏞️ = park"
  },
  {
    "id": 1396,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "FILM — 🏃‍♂️🍫",
    "a": "Forrest Gump",
    "fact": "🏃‍♂️ = 'Run, Forrest, run!', 🍫 = 'life is like a box of chocolates'"
  },
  {
    "id": 1397,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "FILM — 💊🕶️",
    "a": "The Matrix",
    "fact": "💊 = the red pill, 🕶️ = the iconic sunglasses"
  },
  {
    "id": 1398,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "FILM — 🌀💭",
    "a": "Inception",
    "fact": "🌀 = the spinning top totem, 💭 = dreams within dreams"
  },
  {
    "id": 1399,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "FILM — ⭐⚔️",
    "a": "Star Wars",
    "fact": "Literally star + wars"
  },
  {
    "id": 1400,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "FILM — ⏪🚗⚡",
    "a": "Back to the Future",
    "fact": "⏪ = going back in time, 🚗⚡ = the DeLorean hitting 88mph"
  },
  {
    "id": 1401,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "FILM — 🎲🌴",
    "a": "Jumanji",
    "fact": "🎲 = the board game, 🌴 = the jungle it unleashes"
  },
  {
    "id": 1402,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "FILM — 😋🏹",
    "a": "The Hunger Games",
    "fact": "😋 = hunger, 🏹 = Katniss's bow (the games)"
  },
  {
    "id": 1403,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "FILM — 🏝️⚽",
    "a": "Cast Away",
    "fact": "🏝️ = the deserted island, ⚽ = Wilson the volleyball"
  },
  {
    "id": 1404,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "FILM — 6️⃣👻",
    "a": "The Sixth Sense",
    "fact": "6️⃣ = sixth, 👻 = the sense — 'I see dead people'"
  },
  {
    "id": 1405,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "FILM — 🤫🏠",
    "a": "A Quiet Place",
    "fact": "🤫 = silence, 🏠 = the place"
  },
  {
    "id": 1406,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "FILM — 💀🏊‍♂️",
    "a": "Deadpool",
    "fact": "Literally dead + pool"
  },
  {
    "id": 1407,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "FILM — 📓❤️",
    "a": "The Notebook",
    "fact": "Literally notebook + love story"
  },
  {
    "id": 1408,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "FILM — ⚖️👱‍♀️",
    "a": "Legally Blonde",
    "fact": "⚖️ = legally (scales of justice), 👱‍♀️ = blonde"
  },
  {
    "id": 1409,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "FILM — 😈👠",
    "a": "The Devil Wears Prada",
    "fact": "😈 = the devil, 👠 = the Prada heels"
  },
  {
    "id": 1410,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "FILM — 💅👩",
    "a": "Pretty Woman",
    "fact": "💅 = pretty/polished, 👩 = woman"
  },
  {
    "id": 1411,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "FILM — 💀🎸🇲🇽",
    "a": "Coco",
    "fact": "💀 = the Land of the Dead, 🎸 = music, 🇲🇽 = Mexico"
  },
  {
    "id": 1412,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "FILM — 🌊👑",
    "a": "Moana",
    "fact": "🌊 = the ocean she's drawn to, 👑 = becoming chief"
  },
  {
    "id": 1413,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "FILM — 👸💇‍♀️",
    "a": "Tangled",
    "fact": "👸 = the princess, 💇‍♀️ = her very long, very tangled hair"
  },
  {
    "id": 1414,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "FILM — 🧅👹",
    "a": "Shrek",
    "fact": "🧅 = 'ogres are like onions', 👹 = the ogre"
  },
  {
    "id": 1415,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "FILM — 💪👨‍👩‍👧‍👦",
    "a": "The Incredibles",
    "fact": "💪 = super strength, 👨‍👩‍👧‍👦 = the family of superheroes"
  },
  {
    "id": 1416,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "TV SERIES — 🧪😈",
    "a": "Breaking Bad",
    "fact": "🧪 = the chemistry, 😈 = the descent into 'bad'"
  },
  {
    "id": 1417,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "TV SERIES — 🐉👑⚔️",
    "a": "Game of Thrones",
    "fact": "🐉 = dragons, 👑 = the crown, ⚔️ = the war for the throne"
  },
  {
    "id": 1418,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "TV SERIES — 🙃👾",
    "a": "Stranger Things",
    "fact": "🙃 = the upside-down world, 👾 = the monster"
  },
  {
    "id": 1419,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "TV SERIES — ☕👨‍👩‍👧‍👦",
    "a": "Friends",
    "fact": "☕ = Central Perk, the group = the friends themselves"
  },
  {
    "id": 1420,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "TV SERIES — 🏢😂",
    "a": "The Office",
    "fact": "🏢 = the office, 😂 = the mockumentary comedy"
  },
  {
    "id": 1421,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "TV SERIES — 🔍🎩",
    "a": "Sherlock",
    "fact": "🔍 = the detective work, 🎩 = his iconic deerstalker hat"
  },
  {
    "id": 1422,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "TV SERIES — 👑👸",
    "a": "The Crown",
    "fact": "Literally the crown + the queen wearing it"
  },
  {
    "id": 1423,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "TV SERIES — 💛📺👨‍👩‍👧‍👦",
    "a": "The Simpsons",
    "fact": "💛 = famously yellow skin, 📺 = the long-running show, the family = the Simpsons"
  },
  {
    "id": 1424,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "TV SERIES — 🚶‍♂️🧟‍♂️",
    "a": "The Walking Dead",
    "fact": "Literally walking + dead"
  },
  {
    "id": 1425,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "TV SERIES — 🦑🎮",
    "a": "Squid Game",
    "fact": "Literally squid + game"
  },
  {
    "id": 1426,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "TV SERIES — 🤍🩺",
    "a": "Grey's Anatomy",
    "fact": "🤍 = grey, 🩺 = anatomy (medical drama)"
  },
  {
    "id": 1427,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "TV SERIES — 💰🎭",
    "a": "Money Heist",
    "fact": "💰 = the money, 🎭 = the Dalí masks the crew wears"
  },
  {
    "id": 1428,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "TV SERIES — 🎩🔫",
    "a": "Peaky Blinders",
    "fact": "🎩 = the flat caps (razor blades hidden in the peaks), 🔫 = the gang violence"
  },
  {
    "id": 1429,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "TV SERIES — 💊🌴",
    "a": "Narcos",
    "fact": "💊 = the drug trade, 🌴 = the Colombian setting"
  },
  {
    "id": 1430,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "TV SERIES — 👨❓👩",
    "a": "How I Met Your Mother",
    "fact": "A man, a question, and the mystery woman — literally the show's premise"
  },
  {
    "id": 1431,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "BOOK — ⚡🧙‍♂️",
    "a": "Harry Potter",
    "fact": "⚡ = his lightning-bolt scar, 🧙‍♂️ = the young wizard"
  },
  {
    "id": 1432,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "BOOK — 💍🌋",
    "a": "The Lord of the Rings",
    "fact": "💍 = the One Ring, 🌋 = Mount Doom, where it has to be destroyed"
  },
  {
    "id": 1433,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "BOOK — 🦁🙅",
    "a": "Pride and Prejudice",
    "fact": "🦁 = a 'pride' of lions (wordplay on Pride), 🙅 = prejudice/rejection"
  },
  {
    "id": 1434,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "BOOK — 🔫🐦",
    "a": "To Kill a Mockingbird",
    "fact": "Literally kill + a bird (a mockingbird)"
  },
  {
    "id": 1435,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "BOOK — 1️⃣9️⃣8️⃣4️⃣👁️",
    "a": "1984",
    "fact": "The year, plus Big Brother's all-seeing eye"
  },
  {
    "id": 1436,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "BOOK — 🐳🔱",
    "a": "Moby Dick",
    "fact": "🐳 = the great white whale, 🔱 = the harpoon hunting it"
  },
  {
    "id": 1437,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "BOOK — 🐰🕳️🎩",
    "a": "Alice in Wonderland",
    "fact": "🐰 = the White Rabbit, 🕳️ = the rabbit hole, 🎩 = the Mad Hatter"
  },
  {
    "id": 1438,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "BOOK — 🕷️🕸️",
    "a": "Charlotte's Web",
    "fact": "Literally spider + web"
  },
  {
    "id": 1439,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "BOOK — 🐛😋🍎",
    "a": "The Very Hungry Caterpillar",
    "fact": "🐛 = the caterpillar, 😋🍎 = eating his way through everything"
  },
  {
    "id": 1440,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "BOOK — 🥚💚🍖",
    "a": "Green Eggs and Ham",
    "fact": "Literally green + eggs + ham"
  },
  {
    "id": 1441,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "BOOK — 🐱🎩",
    "a": "The Cat in the Hat",
    "fact": "Literally cat + hat"
  },
  {
    "id": 1442,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "BOOK — 🍫🏭",
    "a": "Charlie and the Chocolate Factory",
    "fact": "Literally chocolate + factory"
  },
  {
    "id": 1443,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "BOOK — ⚔️☮️",
    "a": "War and Peace",
    "fact": "Literally war + peace"
  },
  {
    "id": 1444,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "BOOK — 🎨🔐",
    "a": "The Da Vinci Code",
    "fact": "🎨 = Da Vinci's art, 🔐 = the hidden code within it"
  },
  {
    "id": 1445,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "BOOK — 🕳️🧙‍♂️",
    "a": "The Hobbit",
    "fact": "'In a hole in the ground there lived a hobbit' — plus the wizard who starts it all"
  },
  {
    "id": 1446,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "PHRASE — 1️⃣🔵🌙",
    "a": "Once in a blue moon",
    "fact": "Literally once + blue + moon"
  },
  {
    "id": 1447,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "PHRASE — 🍰",
    "a": "Piece of cake",
    "fact": "Meaning something very easy"
  },
  {
    "id": 1448,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "PHRASE — 💥🦵",
    "a": "Break a leg",
    "fact": "Literally break + leg — theatre slang for 'good luck'"
  },
  {
    "id": 1449,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "PHRASE — 🫘💦",
    "a": "Spill the beans",
    "fact": "Literally spill + beans — meaning to reveal a secret"
  },
  {
    "id": 1450,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "PHRASE — ⬇️🌦️",
    "a": "Under the weather",
    "fact": "Literally under + weather — meaning feeling unwell"
  },
  {
    "id": 1451,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "PHRASE — 💪🦵💰",
    "a": "Cost an arm and a leg",
    "fact": "Literally arm + leg + money — meaning very expensive"
  },
  {
    "id": 1452,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "PHRASE — 🐈🛍️",
    "a": "Let the cat out of the bag",
    "fact": "Literally cat + bag — meaning to reveal a secret"
  },
  {
    "id": 1453,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "PHRASE — 👊🛏️",
    "a": "Hit the sack",
    "fact": "Literally hit + sack (bed) — meaning to go to sleep"
  },
  {
    "id": 1454,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "PHRASE — 🙏🎭",
    "a": "A blessing in disguise",
    "fact": "Literally blessing + disguise"
  },
  {
    "id": 1455,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "PHRASE — 🦷🔫",
    "a": "Bite the bullet",
    "fact": "Literally bite + bullet — meaning to face something difficult head-on"
  },
  {
    "id": 1456,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "PHRASE — 🐕🌳❌",
    "a": "Barking up the wrong tree",
    "fact": "Literally dog barking + tree + wrong"
  },
  {
    "id": 1457,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "PHRASE — 🪨🐦🐦",
    "a": "Kill two birds with one stone",
    "fact": "Literally one stone + two birds"
  },
  {
    "id": 1458,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "PHRASE — 🐷✈️",
    "a": "When pigs fly",
    "fact": "Literally pig + flying — meaning something that will never happen"
  },
  {
    "id": 1459,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "PHRASE — 🐘🏠",
    "a": "The elephant in the room",
    "fact": "Literally elephant + room — an obvious problem nobody mentions"
  },
  {
    "id": 1460,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "PHRASE — 🏃💬🔇",
    "a": "Actions speak louder than words",
    "fact": "Literally action + words + silenced"
  },
  {
    "id": 1461,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "ACTOR — 🐈🚢",
    "a": "Tom Cruise",
    "fact": "🐈 = Tom (the cat from Tom & Jerry), 🚢 = cruise (ship)"
  },
  {
    "id": 1462,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "ACTOR — 🍞🕳️",
    "a": "Brad Pitt",
    "fact": "🍞 = bread (sounds like 'Brad'), 🕳️ = pit (hole)"
  },
  {
    "id": 1463,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "ACTOR — 📜🔨",
    "a": "Will Smith",
    "fact": "📜 = a will (legal document), 🔨 = a smith (blacksmith)"
  },
  {
    "id": 1464,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "ACTOR — 🃏⚫",
    "a": "Jack Black",
    "fact": "Literally jack (playing card) + black"
  },
  {
    "id": 1465,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "ACTOR — 🍬🥄",
    "a": "Reese Witherspoon",
    "fact": "🍬 = Reese's (candy, sounds like 'Reese'), 🥄 = spoon (sounds like the end of 'Witherspoon')"
  },
  {
    "id": 1466,
    "cat": "Emoji Decode",
    "type": "open",
    "q": "ACTOR — 🪨",
    "a": "Dwayne Johnson",
    "fact": "His famous nickname — 'The Rock'"
  }
]);
