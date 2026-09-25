// Namibia Road Trip Quiz — question bank
// Add more questions by appending objects to this array. Fields:
// id (unique number), cat (category name), type ('mcq'|'open'|'tf'|'estimate'),
// q (question text), a (answer text), opts (array, mcq only), fact (optional bonus tidbit)
const QUESTIONS = [
  {
    "id": 1,
    "cat": "Geography & Nature",
    "type": "mcq",
    "q": "What is the longest river in the world?",
    "a": "Nile",
    "opts": [
      "Nile",
      "Amazon",
      "Yangtze",
      "Mississippi"
    ],
    "fact": "The Nile and Amazon are often disputed, but the Nile is traditionally listed as longest at ~6,650km."
  },
  {
    "id": 2,
    "cat": "Geography & Nature",
    "type": "mcq",
    "q": "Which is the largest desert in the world by area (including polar deserts)?",
    "a": "Antarctic Desert",
    "opts": [
      "Sahara",
      "Arabian Desert",
      "Antarctic Desert",
      "Gobi Desert"
    ],
    "fact": "By the technical definition of 'desert' (low precipitation), Antarctica is the largest."
  },
  {
    "id": 3,
    "cat": "Geography & Nature",
    "type": "open",
    "q": "What is the smallest country in the world by area?",
    "a": "Vatican City"
  },
  {
    "id": 4,
    "cat": "Geography & Nature",
    "type": "mcq",
    "q": "Mount Kilimanjaro, Africa's highest peak, is located in which country?",
    "a": "Tanzania",
    "opts": [
      "Kenya",
      "Tanzania",
      "Uganda",
      "Ethiopia"
    ]
  },
  {
    "id": 5,
    "cat": "Geography & Nature",
    "type": "open",
    "q": "Which ocean is the largest by surface area?",
    "a": "The Pacific Ocean"
  },
  {
    "id": 6,
    "cat": "Geography & Nature",
    "type": "tf",
    "q": "Canada has the longest coastline of any country in the world.",
    "a": "True",
    "fact": "Canada's coastline, including islands, is roughly 202,000km."
  },
  {
    "id": 7,
    "cat": "Geography & Nature",
    "type": "mcq",
    "q": "Which country has the most time zones?",
    "a": "France",
    "opts": [
      "Russia",
      "USA",
      "France",
      "China"
    ],
    "fact": "Thanks to its overseas territories, France spans 12 time zones."
  },
  {
    "id": 8,
    "cat": "Geography & Nature",
    "type": "estimate",
    "q": "How many countries share a land border with Brazil?",
    "a": "10"
  },
  {
    "id": 9,
    "cat": "Geography & Nature",
    "type": "open",
    "q": "What is the capital of Australia? (Hint: it's not Sydney)",
    "a": "Canberra"
  },
  {
    "id": 10,
    "cat": "Geography & Nature",
    "type": "mcq",
    "q": "Which African country was formerly known as Abyssinia?",
    "a": "Ethiopia",
    "opts": [
      "Eritrea",
      "Sudan",
      "Somalia",
      "Ethiopia"
    ]
  },
  {
    "id": 11,
    "cat": "Geography & Nature",
    "type": "estimate",
    "q": "What percentage of Earth's surface is covered by water, roughly?",
    "a": "71%"
  },
  {
    "id": 12,
    "cat": "Geography & Nature",
    "type": "open",
    "q": "What is the driest inhabited continent on Earth?",
    "a": "Australia"
  },
  {
    "id": 13,
    "cat": "Geography & Nature",
    "type": "mcq",
    "q": "Which sea is the saltiest large body of water on Earth?",
    "a": "The Dead Sea",
    "opts": [
      "The Dead Sea",
      "The Red Sea",
      "The Caspian Sea",
      "The Black Sea"
    ]
  },
  {
    "id": 14,
    "cat": "Geography & Nature",
    "type": "tf",
    "q": "The Sahara Desert is roughly half the size of the entire United States.",
    "a": "False"
  },
  {
    "id": 15,
    "cat": "Geography & Nature",
    "type": "open",
    "q": "Which mountain range separates Europe from Asia?",
    "a": "The Ural Mountains"
  },
  {
    "id": 16,
    "cat": "Geography & Nature",
    "type": "mcq",
    "q": "What is the world's largest island (not counting Australia, which is classed as a continent)?",
    "a": "Greenland",
    "opts": [
      "New Guinea",
      "Greenland",
      "Borneo",
      "Madagascar"
    ]
  },
  {
    "id": 17,
    "cat": "Geography & Nature",
    "type": "estimate",
    "q": "How many countries are there currently in Africa?",
    "a": "54"
  },
  {
    "id": 18,
    "cat": "Geography & Nature",
    "type": "open",
    "q": "Which river flows through Egypt and empties into the Mediterranean Sea?",
    "a": "The Nile"
  },
  {
    "id": 19,
    "cat": "Geography & Nature",
    "type": "mcq",
    "q": "Which of these countries is landlocked (no coastline)?",
    "a": "Zimbabwe",
    "opts": [
      "Mozambique",
      "Angola",
      "Zimbabwe",
      "Namibia"
    ]
  },
  {
    "id": 20,
    "cat": "Geography & Nature",
    "type": "open",
    "q": "What is the largest lake in Africa by surface area?",
    "a": "Lake Victoria"
  },
  {
    "id": 21,
    "cat": "Geography & Nature",
    "type": "mcq",
    "q": "The Great Barrier Reef is located off the coast of which country?",
    "a": "Australia",
    "opts": [
      "Philippines",
      "Indonesia",
      "Fiji",
      "Australia"
    ]
  },
  {
    "id": 22,
    "cat": "Geography & Nature",
    "type": "tf",
    "q": "Russia spans two continents, Europe and Asia.",
    "a": "True"
  },
  {
    "id": 23,
    "cat": "Geography & Nature",
    "type": "estimate",
    "q": "How tall, in metres, is Mount Everest?",
    "a": "8,849m"
  },
  {
    "id": 24,
    "cat": "Geography & Nature",
    "type": "open",
    "q": "Which desert covers much of Botswana and parts of Namibia and South Africa?",
    "a": "The Kalahari Desert"
  },
  {
    "id": 25,
    "cat": "Geography & Nature",
    "type": "mcq",
    "q": "What is the currency of Japan?",
    "a": "Yen",
    "opts": [
      "Yen",
      "Yuan",
      "Won",
      "Ringgit"
    ]
  },
  {
    "id": 26,
    "cat": "Geography & Nature",
    "type": "open",
    "q": "Victoria Falls sits on the border of which two countries?",
    "a": "Zambia and Zimbabwe"
  },
  {
    "id": 27,
    "cat": "Geography & Nature",
    "type": "mcq",
    "q": "Which country has the most active volcanoes?",
    "a": "Indonesia",
    "opts": [
      "Japan",
      "Indonesia",
      "USA",
      "Chile"
    ]
  },
  {
    "id": 28,
    "cat": "Geography & Nature",
    "type": "estimate",
    "q": "Roughly how many islands does Indonesia have?",
    "a": "About 17,000"
  },
  {
    "id": 29,
    "cat": "Geography & Nature",
    "type": "open",
    "q": "What is the tallest mountain in North America?",
    "a": "Denali (Mount McKinley)"
  },
  {
    "id": 30,
    "cat": "Geography & Nature",
    "type": "mcq",
    "q": "Which strait separates Europe from Africa at its narrowest point?",
    "a": "The Strait of Gibraltar",
    "opts": [
      "The Bosphorus",
      "The Dardanelles",
      "The Strait of Gibraltar",
      "The Strait of Hormuz"
    ]
  },
  {
    "id": 31,
    "cat": "Geography & Nature",
    "type": "tf",
    "q": "Lake Baikal is the largest lake in the world by surface area.",
    "a": "False"
  },
  {
    "id": 32,
    "cat": "Geography & Nature",
    "type": "open",
    "q": "What is the capital city of Canada?",
    "a": "Ottawa"
  },
  {
    "id": 33,
    "cat": "Geography & Nature",
    "type": "mcq",
    "q": "Which of these is NOT one of the five Great Lakes?",
    "a": "Lake Champlain",
    "opts": [
      "Lake Erie",
      "Lake Huron",
      "Lake Ontario",
      "Lake Champlain"
    ]
  },
  {
    "id": 34,
    "cat": "Geography & Nature",
    "type": "estimate",
    "q": "What is the approximate length of the Great Wall of China, in kilometres (including all branches)?",
    "a": "About 21,000km"
  },
  {
    "id": 35,
    "cat": "Geography & Nature",
    "type": "open",
    "q": "Which South American country is named after the equator?",
    "a": "Ecuador"
  },
  {
    "id": 36,
    "cat": "Geography & Nature",
    "type": "mcq",
    "q": "The Amazon Rainforest is primarily located in which country?",
    "a": "Brazil",
    "opts": [
      "Brazil",
      "Peru",
      "Colombia",
      "Venezuela"
    ]
  },
  {
    "id": 37,
    "cat": "Geography & Nature",
    "type": "open",
    "q": "What is the world's tallest waterfall (uninterrupted drop)?",
    "a": "Angel Falls, Venezuela"
  },
  {
    "id": 38,
    "cat": "Geography & Nature",
    "type": "tf",
    "q": "Antarctica is technically classified as a desert.",
    "a": "True"
  },
  {
    "id": 39,
    "cat": "History",
    "type": "mcq",
    "q": "In which year did the Berlin Wall fall?",
    "a": "1989",
    "opts": [
      "1987",
      "1989",
      "1991",
      "1993"
    ]
  },
  {
    "id": 40,
    "cat": "History",
    "type": "open",
    "q": "Who was the first Emperor of Rome?",
    "a": "Augustus (Octavian)"
  },
  {
    "id": 41,
    "cat": "History",
    "type": "mcq",
    "q": "The Great Fire of London occurred in which year?",
    "a": "1666",
    "opts": [
      "1606",
      "1706",
      "1666",
      "1756"
    ]
  },
  {
    "id": 42,
    "cat": "History",
    "type": "open",
    "q": "Which explorer is credited with leading the first expedition to circumnavigate the globe (though he died partway through)?",
    "a": "Ferdinand Magellan"
  },
  {
    "id": 43,
    "cat": "History",
    "type": "tf",
    "q": "The Titanic sank on its second voyage.",
    "a": "False"
  },
  {
    "id": 44,
    "cat": "History",
    "type": "mcq",
    "q": "Which ancient civilisation built Machu Picchu?",
    "a": "The Inca",
    "opts": [
      "The Maya",
      "The Aztec",
      "The Olmec",
      "The Inca"
    ]
  },
  {
    "id": 45,
    "cat": "History",
    "type": "estimate",
    "q": "In what year did World War II end?",
    "a": "1945"
  },
  {
    "id": 46,
    "cat": "History",
    "type": "open",
    "q": "Who was the Soviet leader during the Cuban Missile Crisis?",
    "a": "Nikita Khrushchev"
  },
  {
    "id": 47,
    "cat": "History",
    "type": "mcq",
    "q": "The ancient city of Petra, carved into rose-coloured rock, is located in which country?",
    "a": "Jordan",
    "opts": [
      "Jordan",
      "Egypt",
      "Syria",
      "Israel"
    ]
  },
  {
    "id": 48,
    "cat": "History",
    "type": "tf",
    "q": "The Great Pyramid of Giza was, for over 3,800 years, the tallest man-made structure in the world.",
    "a": "True"
  },
  {
    "id": 49,
    "cat": "History",
    "type": "open",
    "q": "Which wall did Emperor Hadrian build to mark the northern frontier of Roman Britain?",
    "a": "Hadrian's Wall"
  },
  {
    "id": 50,
    "cat": "History",
    "type": "mcq",
    "q": "Who was the first President of the United States?",
    "a": "George Washington",
    "opts": [
      "Thomas Jefferson",
      "George Washington",
      "John Adams",
      "Benjamin Franklin"
    ]
  },
  {
    "id": 51,
    "cat": "History",
    "type": "estimate",
    "q": "How many years did the Hundred Years' War actually last?",
    "a": "116 years"
  },
  {
    "id": 52,
    "cat": "History",
    "type": "open",
    "q": "What treaty officially ended World War I?",
    "a": "The Treaty of Versailles"
  },
  {
    "id": 53,
    "cat": "History",
    "type": "mcq",
    "q": "Which country was the first to grant women the right to vote in national elections (1893)?",
    "a": "New Zealand",
    "opts": [
      "Australia",
      "Finland",
      "New Zealand",
      "Norway"
    ]
  },
  {
    "id": 54,
    "cat": "History",
    "type": "open",
    "q": "Who painted the ceiling of the Sistine Chapel?",
    "a": "Michelangelo"
  },
  {
    "id": 55,
    "cat": "History",
    "type": "mcq",
    "q": "The Rosetta Stone, key to deciphering Egyptian hieroglyphs, is written in how many scripts?",
    "a": "Three",
    "opts": [
      "Two",
      "Four",
      "Five",
      "Three"
    ]
  },
  {
    "id": 56,
    "cat": "History",
    "type": "tf",
    "q": "Napoleon Bonaparte was born in mainland France.",
    "a": "False"
  },
  {
    "id": 57,
    "cat": "History",
    "type": "open",
    "q": "In which year did South Africa hold its first fully democratic election, electing Nelson Mandela as president?",
    "a": "1994"
  },
  {
    "id": 58,
    "cat": "History",
    "type": "mcq",
    "q": "Which empire was ruled by Genghis Khan?",
    "a": "The Mongol Empire",
    "opts": [
      "The Mongol Empire",
      "The Ottoman Empire",
      "The Persian Empire",
      "The Byzantine Empire"
    ]
  },
  {
    "id": 59,
    "cat": "History",
    "type": "estimate",
    "q": "Roughly how many people are estimated to have died in the Black Death in Europe (14th century)?",
    "a": "Around 25 million (about a third of Europe's population)"
  },
  {
    "id": 60,
    "cat": "History",
    "type": "open",
    "q": "Who was the British Prime Minister for most of World War II?",
    "a": "Winston Churchill"
  },
  {
    "id": 61,
    "cat": "History",
    "type": "mcq",
    "q": "The ancient Library of Alexandria was located in which modern-day country?",
    "a": "Egypt",
    "opts": [
      "Greece",
      "Egypt",
      "Turkey",
      "Lebanon"
    ]
  },
  {
    "id": 62,
    "cat": "History",
    "type": "tf",
    "q": "The Vikings reached North America before Christopher Columbus.",
    "a": "True",
    "fact": "Norse explorer Leif Erikson is believed to have reached Newfoundland around 1000 CE."
  },
  {
    "id": 63,
    "cat": "History",
    "type": "open",
    "q": "Which country gifted the Statue of Liberty to the United States?",
    "a": "France"
  },
  {
    "id": 64,
    "cat": "History",
    "type": "mcq",
    "q": "Who was the last Pharaoh of Egypt?",
    "a": "Cleopatra VII",
    "opts": [
      "Tutankhamun",
      "Ramesses II",
      "Cleopatra VII",
      "Nefertiti"
    ]
  },
  {
    "id": 65,
    "cat": "History",
    "type": "estimate",
    "q": "In what year did the first human land on the Moon?",
    "a": "1969"
  },
  {
    "id": 66,
    "cat": "History",
    "type": "open",
    "q": "What was the name of the ship that brought the Pilgrims to America in 1620?",
    "a": "The Mayflower"
  },
  {
    "id": 67,
    "cat": "History",
    "type": "mcq",
    "q": "The Berlin Airlift took place in response to a blockade by which country?",
    "a": "The Soviet Union",
    "opts": [
      "East Germany",
      "Poland",
      "Czechoslovakia",
      "The Soviet Union"
    ]
  },
  {
    "id": 68,
    "cat": "History",
    "type": "tf",
    "q": "The Eiffel Tower was originally intended to be a permanent structure.",
    "a": "False"
  },
  {
    "id": 69,
    "cat": "History",
    "type": "open",
    "q": "Which queen ruled England for 44 years, giving her name to the 'Elizabethan era'?",
    "a": "Queen Elizabeth I"
  },
  {
    "id": 70,
    "cat": "History",
    "type": "mcq",
    "q": "Which country was formerly called 'Persia'?",
    "a": "Iran",
    "opts": [
      "Iran",
      "Iraq",
      "Turkey",
      "Afghanistan"
    ]
  },
  {
    "id": 71,
    "cat": "History",
    "type": "open",
    "q": "Who wrote the Communist Manifesto along with Friedrich Engels?",
    "a": "Karl Marx"
  },
  {
    "id": 72,
    "cat": "History",
    "type": "estimate",
    "q": "How many years did the Roman Empire's western half last after its traditional founding in 27 BCE until its fall in 476 CE?",
    "a": "About 500 years"
  },
  {
    "id": 73,
    "cat": "History",
    "type": "mcq",
    "q": "The Boston Tea Party was a protest against tax on which product?",
    "a": "Tea",
    "opts": [
      "Sugar",
      "Tea",
      "Tobacco",
      "Cotton"
    ]
  },
  {
    "id": 74,
    "cat": "History",
    "type": "open",
    "q": "Which German city was divided by a wall from 1961 to 1989?",
    "a": "Berlin"
  },
  {
    "id": 75,
    "cat": "History",
    "type": "tf",
    "q": "Cleopatra lived closer in time to the Moon landing than to the building of the Great Pyramid of Giza.",
    "a": "True",
    "fact": "The pyramid was built ~2560 BCE, Cleopatra died 30 BCE, and the Moon landing was 1969 CE — Cleopatra is closer to us."
  },
  {
    "id": 76,
    "cat": "Science",
    "type": "mcq",
    "q": "What is the chemical symbol for gold?",
    "a": "Au",
    "opts": [
      "Ag",
      "Gd",
      "Au",
      "Go"
    ]
  },
  {
    "id": 77,
    "cat": "Science",
    "type": "open",
    "q": "What planet is known as the Red Planet?",
    "a": "Mars"
  },
  {
    "id": 78,
    "cat": "Science",
    "type": "mcq",
    "q": "How many bones are there in the adult human body?",
    "a": "206",
    "opts": [
      "186",
      "226",
      "246",
      "206"
    ]
  },
  {
    "id": 79,
    "cat": "Science",
    "type": "tf",
    "q": "A group of flamingos is called a 'parliament'.",
    "a": "False"
  },
  {
    "id": 80,
    "cat": "Science",
    "type": "open",
    "q": "What gas do plants absorb from the atmosphere for photosynthesis?",
    "a": "Carbon dioxide"
  },
  {
    "id": 81,
    "cat": "Science",
    "type": "mcq",
    "q": "What is the hardest natural substance on Earth?",
    "a": "Diamond",
    "opts": [
      "Diamond",
      "Quartz",
      "Titanium",
      "Graphite"
    ]
  },
  {
    "id": 82,
    "cat": "Science",
    "type": "estimate",
    "q": "What is the average human body temperature in Celsius?",
    "a": "37°C"
  },
  {
    "id": 83,
    "cat": "Science",
    "type": "open",
    "q": "What is the largest organ in the human body?",
    "a": "The skin"
  },
  {
    "id": 84,
    "cat": "Science",
    "type": "mcq",
    "q": "Which planet has the most moons in our solar system (as currently confirmed)?",
    "a": "Saturn",
    "opts": [
      "Jupiter",
      "Saturn",
      "Uranus",
      "Neptune"
    ]
  },
  {
    "id": 85,
    "cat": "Science",
    "type": "tf",
    "q": "Cheetahs are the fastest land animal, reaching speeds of over 100km/h.",
    "a": "True"
  },
  {
    "id": 86,
    "cat": "Science",
    "type": "open",
    "q": "What force keeps planets in orbit around the sun?",
    "a": "Gravity"
  },
  {
    "id": 87,
    "cat": "Science",
    "type": "mcq",
    "q": "What is the smallest unit of life?",
    "a": "The cell",
    "opts": [
      "The atom",
      "The molecule",
      "The cell",
      "The organelle"
    ]
  },
  {
    "id": 88,
    "cat": "Science",
    "type": "estimate",
    "q": "How many chambers does the human heart have?",
    "a": "4"
  },
  {
    "id": 89,
    "cat": "Science",
    "type": "open",
    "q": "What do you call an animal that eats both plants and meat?",
    "a": "An omnivore"
  },
  {
    "id": 90,
    "cat": "Science",
    "type": "mcq",
    "q": "Which element makes up most of the Sun?",
    "a": "Hydrogen",
    "opts": [
      "Helium",
      "Oxygen",
      "Carbon",
      "Hydrogen"
    ]
  },
  {
    "id": 91,
    "cat": "Science",
    "type": "tf",
    "q": "Octopuses have two hearts.",
    "a": "False"
  },
  {
    "id": 92,
    "cat": "Science",
    "type": "open",
    "q": "What is the name of the process by which caterpillars turn into butterflies?",
    "a": "Metamorphosis"
  },
  {
    "id": 93,
    "cat": "Science",
    "type": "mcq",
    "q": "Which of these animals is a marsupial?",
    "a": "Kangaroo",
    "opts": [
      "Kangaroo",
      "Hedgehog",
      "Armadillo",
      "Sloth"
    ]
  },
  {
    "id": 94,
    "cat": "Science",
    "type": "estimate",
    "q": "Roughly how many species of animal has Namibia's Etosha National Park recorded, including birds?",
    "a": "Over 340 bird species and 114 mammal species"
  },
  {
    "id": 95,
    "cat": "Science",
    "type": "open",
    "q": "What is the study of earthquakes called?",
    "a": "Seismology"
  },
  {
    "id": 96,
    "cat": "Science",
    "type": "mcq",
    "q": "What type of animal is a Komodo dragon?",
    "a": "A lizard (monitor lizard)",
    "opts": [
      "A crocodile",
      "A lizard (monitor lizard)",
      "A dinosaur descendant snake",
      "A giant gecko"
    ]
  },
  {
    "id": 97,
    "cat": "Science",
    "type": "tf",
    "q": "Sharks existed before trees.",
    "a": "True",
    "fact": "Sharks date back roughly 400 million years; the earliest trees appeared around 350 million years ago."
  },
  {
    "id": 98,
    "cat": "Science",
    "type": "open",
    "q": "What is the name for a baby kangaroo?",
    "a": "A joey"
  },
  {
    "id": 99,
    "cat": "Science",
    "type": "mcq",
    "q": "Which scientist developed the theory of general relativity?",
    "a": "Albert Einstein",
    "opts": [
      "Isaac Newton",
      "Niels Bohr",
      "Albert Einstein",
      "Galileo Galilei"
    ]
  },
  {
    "id": 100,
    "cat": "Science",
    "type": "estimate",
    "q": "How many planets are in our solar system (since Pluto's reclassification)?",
    "a": "8"
  },
  {
    "id": 101,
    "cat": "Science",
    "type": "open",
    "q": "What is the world's largest mammal?",
    "a": "The blue whale"
  },
  {
    "id": 102,
    "cat": "Science",
    "type": "mcq",
    "q": "What is the main gas found in the Earth's atmosphere?",
    "a": "Nitrogen",
    "opts": [
      "Oxygen",
      "Nitrogen",
      "Carbon dioxide",
      "Argon"
    ]
  },
  {
    "id": 103,
    "cat": "Science",
    "type": "tf",
    "q": "Bananas are berries, but strawberries are not.",
    "a": "True",
    "fact": "Botanically, bananas qualify as berries while strawberries are 'accessory fruits'."
  },
  {
    "id": 104,
    "cat": "Science",
    "type": "open",
    "q": "What do you call a scientist who studies weather?",
    "a": "A meteorologist"
  },
  {
    "id": 105,
    "cat": "Science",
    "type": "mcq",
    "q": "Which of these is NOT a primary colour of light (RGB)?",
    "a": "Yellow",
    "opts": [
      "Red",
      "Green",
      "Blue",
      "Yellow"
    ]
  },
  {
    "id": 106,
    "cat": "Science",
    "type": "estimate",
    "q": "Roughly what percentage of the human body is water?",
    "a": "About 60%"
  },
  {
    "id": 107,
    "cat": "Science",
    "type": "open",
    "q": "What is the powerhouse of the cell?",
    "a": "The mitochondria"
  },
  {
    "id": 108,
    "cat": "Science",
    "type": "mcq",
    "q": "Which animal is known to have the largest eyes of any land animal?",
    "a": "The ostrich",
    "opts": [
      "The horse",
      "The ostrich",
      "The chameleon",
      "The owl"
    ]
  },
  {
    "id": 109,
    "cat": "Science",
    "type": "tf",
    "q": "Namibia's Welwitschia plant, found in the Namib Desert, can live for over 1,000 years.",
    "a": "True",
    "fact": "Some individual Welwitschia mirabilis plants are estimated to be 1,500–2,000 years old."
  },
  {
    "id": 110,
    "cat": "Science",
    "type": "open",
    "q": "What natural phenomenon is caused by sunlight refracting through raindrops?",
    "a": "A rainbow"
  },
  {
    "id": 111,
    "cat": "Science",
    "type": "mcq",
    "q": "Which gas makes up most of the air we exhale, aside from nitrogen?",
    "a": "Oxygen (still, in reduced amount) and carbon dioxide",
    "opts": [
      "Only carbon dioxide",
      "Oxygen (still, in reduced amount) and carbon dioxide",
      "Only oxygen",
      "Helium"
    ]
  },
  {
    "id": 112,
    "cat": "Movies & TV",
    "type": "open",
    "q": "Which 1997 film about a doomed ocean liner became the first to gross over $1 billion worldwide?",
    "a": "Titanic"
  },
  {
    "id": 113,
    "cat": "Movies & TV",
    "type": "mcq",
    "q": "In 'The Wizard of Oz', what colour are Dorothy's famous shoes?",
    "a": "Ruby red",
    "opts": [
      "Emerald green",
      "Ruby red",
      "Golden yellow",
      "Silver"
    ]
  },
  {
    "id": 114,
    "cat": "Movies & TV",
    "type": "open",
    "q": "Who directed 'Jaws', 'E.T.' and 'Jurassic Park'?",
    "a": "Steven Spielberg"
  },
  {
    "id": 115,
    "cat": "Movies & TV",
    "type": "mcq",
    "q": "Which animated studio created 'Shrek'?",
    "a": "DreamWorks",
    "opts": [
      "Pixar",
      "DreamWorks",
      "Illumination",
      "Disney"
    ]
  },
  {
    "id": 116,
    "cat": "Movies & TV",
    "type": "tf",
    "q": "The movie 'Casablanca' is set during World War II.",
    "a": "True"
  },
  {
    "id": 117,
    "cat": "Movies & TV",
    "type": "open",
    "q": "What is the name of the coffee shop in the sitcom 'Friends'?",
    "a": "Central Perk"
  },
  {
    "id": 118,
    "cat": "Movies & TV",
    "type": "mcq",
    "q": "Which actor played Jack Sparrow in 'Pirates of the Caribbean'?",
    "a": "Johnny Depp",
    "opts": [
      "Orlando Bloom",
      "Johnny Depp",
      "Geoffrey Rush",
      "Javier Bardem"
    ]
  },
  {
    "id": 119,
    "cat": "Movies & TV",
    "type": "estimate",
    "q": "How many 'Star Wars' saga films (episodes I–IX) make up the core numbered series?",
    "a": "9"
  },
  {
    "id": 120,
    "cat": "Movies & TV",
    "type": "open",
    "q": "Which HBO series follows warring noble families in the fictional Seven Kingdoms?",
    "a": "Game of Thrones"
  },
  {
    "id": 121,
    "cat": "Movies & TV",
    "type": "mcq",
    "q": "In 'Toy Story', what type of toy is Woody?",
    "a": "A cowboy pull-string doll",
    "opts": [
      "A space ranger action figure",
      "A cowboy pull-string doll",
      "A robot",
      "A dinosaur"
    ]
  },
  {
    "id": 122,
    "cat": "Movies & TV",
    "type": "open",
    "q": "Who played the title role in the 'John Wick' film series?",
    "a": "Keanu Reeves"
  },
  {
    "id": 123,
    "cat": "Movies & TV",
    "type": "mcq",
    "q": "Which David Attenborough-narrated series explores life on Earth's oceans, forests and more?",
    "a": "Planet Earth",
    "opts": [
      "Planet Earth",
      "Wildlife Diaries",
      "Nature's Kingdom",
      "Life on Land"
    ],
    "fact": "Attenborough has narrated many, but 'Planet Earth' (2006) is the landmark BBC series."
  },
  {
    "id": 124,
    "cat": "Movies & TV",
    "type": "tf",
    "q": "'The Simpsons' is the longest-running scripted primetime series in US television history.",
    "a": "True"
  },
  {
    "id": 125,
    "cat": "Movies & TV",
    "type": "open",
    "q": "What is the fictional African country in Marvel's 'Black Panther'?",
    "a": "Wakanda"
  },
  {
    "id": 126,
    "cat": "Movies & TV",
    "type": "mcq",
    "q": "Which actress played Hermione Granger in the Harry Potter films?",
    "a": "Emma Watson",
    "opts": [
      "Emma Watson",
      "Emma Stone",
      "Emma Roberts",
      "Emma Thompson"
    ]
  },
  {
    "id": 127,
    "cat": "Movies & TV",
    "type": "estimate",
    "q": "How many Best Picture Oscars had 'The Lord of the Rings: The Return of the King' won as of its 2004 sweep, out of how many nominations?",
    "a": "11 wins from 11 nominations"
  },
  {
    "id": 128,
    "cat": "Movies & TV",
    "type": "open",
    "q": "Which Australian actor played Wolverine in the X-Men film franchise?",
    "a": "Hugh Jackman"
  },
  {
    "id": 129,
    "cat": "Movies & TV",
    "type": "mcq",
    "q": "What is the name of the desert planet in 'Dune'?",
    "a": "Arrakis",
    "opts": [
      "Tatooine",
      "Arrakis",
      "Dagobah",
      "Vulcan"
    ]
  },
  {
    "id": 130,
    "cat": "Movies & TV",
    "type": "tf",
    "q": "'The Lion King' was inspired in part by Shakespeare's Hamlet.",
    "a": "True"
  },
  {
    "id": 131,
    "cat": "Movies & TV",
    "type": "open",
    "q": "Who directed the 'Lord of the Rings' film trilogy?",
    "a": "Peter Jackson"
  },
  {
    "id": 132,
    "cat": "Movies & TV",
    "type": "mcq",
    "q": "Which sitcom is set in a fictional version of a New York apartment building called 'Central Perk' next door — wait, that's a trick, which show is Central Perk actually from?",
    "a": "Friends",
    "opts": [
      "Friends",
      "Seinfeld",
      "How I Met Your Mother",
      "Frasier"
    ]
  },
  {
    "id": 133,
    "cat": "Movies & TV",
    "type": "open",
    "q": "What is the name of the ship in the Pixar film 'WALL-E' that humans live on?",
    "a": "The Axiom"
  },
  {
    "id": 134,
    "cat": "Movies & TV",
    "type": "mcq",
    "q": "Which British actor has played James Bond the most times on film?",
    "a": "Roger Moore",
    "opts": [
      "Sean Connery",
      "Roger Moore",
      "Daniel Craig",
      "Pierce Brosnan"
    ],
    "fact": "Moore played Bond in 7 films, one more than Connery's 6 (excluding the unofficial 1983 'Never Say Never Again')."
  },
  {
    "id": 135,
    "cat": "Movies & TV",
    "type": "tf",
    "q": "The movie 'Whale Rider' is set in New Zealand.",
    "a": "True"
  },
  {
    "id": 136,
    "cat": "Movies & TV",
    "type": "open",
    "q": "Which nature documentary series famously features Sir David Attenborough visiting the Namib Desert and its 'ghost' plant, the Welwitschia?",
    "a": "Planet Earth / The Green Planet (either accepted)"
  },
  {
    "id": 137,
    "cat": "Movies & TV",
    "type": "mcq",
    "q": "In 'Breaking Bad', what is the first name of the main character, a chemistry teacher turned drug manufacturer?",
    "a": "Walter",
    "opts": [
      "Walter",
      "William",
      "Warren",
      "Wallace"
    ]
  },
  {
    "id": 138,
    "cat": "Movies & TV",
    "type": "estimate",
    "q": "In what year was the first 'Star Wars' film released?",
    "a": "1977"
  },
  {
    "id": 139,
    "cat": "Movies & TV",
    "type": "open",
    "q": "Which streaming series follows a group of kids in the fictional town of Hawkins battling supernatural forces?",
    "a": "Stranger Things"
  },
  {
    "id": 140,
    "cat": "Movies & TV",
    "type": "mcq",
    "q": "Who composed the iconic film scores for 'Jaws', 'Star Wars' and 'Jurassic Park'?",
    "a": "John Williams",
    "opts": [
      "Hans Zimmer",
      "John Williams",
      "Danny Elfman",
      "James Horner"
    ]
  },
  {
    "id": 141,
    "cat": "Movies & TV",
    "type": "tf",
    "q": "The film 'Mad Max: Fury Road' was largely filmed in the Namib Desert in Namibia.",
    "a": "True",
    "fact": "Much of the film was shot near Swakopmund, Namibia, after unexpected rain flooded the original Australian outback location."
  },
  {
    "id": 142,
    "cat": "Movies & TV",
    "type": "open",
    "q": "What is the name of the fictional wizarding school in Harry Potter?",
    "a": "Hogwarts"
  },
  {
    "id": 143,
    "cat": "Movies & TV",
    "type": "mcq",
    "q": "Which studio is behind the Marvel Cinematic Universe?",
    "a": "Marvel Studios",
    "opts": [
      "Marvel Studios",
      "Warner Bros",
      "Legendary Pictures",
      "Sony Pictures"
    ]
  },
  {
    "id": 144,
    "cat": "Movies & TV",
    "type": "open",
    "q": "Who played the Joker in 2019's 'Joker', winning an Academy Award for the role?",
    "a": "Joaquin Phoenix"
  },
  {
    "id": 145,
    "cat": "Movies & TV",
    "type": "mcq",
    "q": "Which animated film features a clownfish named Marlin searching for his son?",
    "a": "Finding Nemo",
    "opts": [
      "Finding Nemo",
      "Shark Tale",
      "Moana",
      "The Little Mermaid"
    ]
  },
  {
    "id": 146,
    "cat": "Movies & TV",
    "type": "estimate",
    "q": "How many seasons did 'Breaking Bad' run for?",
    "a": "5"
  },
  {
    "id": 147,
    "cat": "Movies & TV",
    "type": "open",
    "q": "Which long-running BBC sci-fi series features a time-travelling alien known as 'The Doctor'?",
    "a": "Doctor Who"
  },
  {
    "id": 148,
    "cat": "Sport",
    "type": "open",
    "q": "How many players are on the field for one team in a game of football (soccer), including the goalkeeper?",
    "a": "11"
  },
  {
    "id": 149,
    "cat": "Sport",
    "type": "mcq",
    "q": "In which sport would you perform a 'slam dunk'?",
    "a": "Basketball",
    "opts": [
      "Volleyball",
      "Basketball",
      "Netball",
      "Handball"
    ]
  },
  {
    "id": 150,
    "cat": "Sport",
    "type": "tf",
    "q": "A marathon is officially 42.195 kilometres long.",
    "a": "True"
  },
  {
    "id": 151,
    "cat": "Sport",
    "type": "open",
    "q": "Which country has won the most FIFA Men's World Cup titles?",
    "a": "Brazil"
  },
  {
    "id": 152,
    "cat": "Sport",
    "type": "mcq",
    "q": "In tennis, what is a score of zero called?",
    "a": "Love",
    "opts": [
      "Nil",
      "Love",
      "Duck",
      "Zero"
    ]
  },
  {
    "id": 153,
    "cat": "Sport",
    "type": "estimate",
    "q": "How many holes are played in a standard round of golf?",
    "a": "18"
  },
  {
    "id": 154,
    "cat": "Sport",
    "type": "open",
    "q": "What sport is played at Wimbledon?",
    "a": "Tennis"
  },
  {
    "id": 155,
    "cat": "Sport",
    "type": "mcq",
    "q": "Which country invented the sport of rugby?",
    "a": "England",
    "opts": [
      "England",
      "New Zealand",
      "South Africa",
      "Wales"
    ]
  },
  {
    "id": 156,
    "cat": "Sport",
    "type": "tf",
    "q": "The Olympic Games are held every four years.",
    "a": "True"
  },
  {
    "id": 157,
    "cat": "Sport",
    "type": "open",
    "q": "In cricket, what is the term for a bowler taking three wickets on three consecutive deliveries?",
    "a": "A hat-trick"
  },
  {
    "id": 158,
    "cat": "Sport",
    "type": "mcq",
    "q": "Which country has won the most Rugby World Cups?",
    "a": "South Africa",
    "opts": [
      "New Zealand",
      "South Africa",
      "Australia",
      "England"
    ]
  },
  {
    "id": 159,
    "cat": "Sport",
    "type": "estimate",
    "q": "How many players are on a standard rugby union team on the field?",
    "a": "15"
  },
  {
    "id": 160,
    "cat": "Sport",
    "type": "open",
    "q": "What colour jersey does the leader of the Tour de France wear?",
    "a": "Yellow"
  },
  {
    "id": 161,
    "cat": "Sport",
    "type": "mcq",
    "q": "In boxing, how many rounds are typically fought at professional world championship level?",
    "a": "12",
    "opts": [
      "10",
      "12",
      "15",
      "9"
    ]
  },
  {
    "id": 162,
    "cat": "Sport",
    "type": "tf",
    "q": "South Africa's cricket team is nicknamed the 'Proteas', after the national flower.",
    "a": "True"
  },
  {
    "id": 163,
    "cat": "Sport",
    "type": "open",
    "q": "Which sport is known as 'the sport of kings'?",
    "a": "Horse racing"
  },
  {
    "id": 164,
    "cat": "Sport",
    "type": "mcq",
    "q": "In Formula 1, how many points does a driver receive for winning a Grand Prix (under the standard points system)?",
    "a": "25",
    "opts": [
      "25",
      "20",
      "30",
      "10"
    ]
  },
  {
    "id": 165,
    "cat": "Sport",
    "type": "open",
    "q": "Which country hosted the 2010 FIFA World Cup, the first held on African soil?",
    "a": "South Africa"
  },
  {
    "id": 166,
    "cat": "Sport",
    "type": "mcq",
    "q": "In golf, what term describes a score of one under par on a hole?",
    "a": "Birdie",
    "opts": [
      "Eagle",
      "Birdie",
      "Bogey",
      "Albatross"
    ]
  },
  {
    "id": 167,
    "cat": "Sport",
    "type": "tf",
    "q": "Cheetahs, native to Namibia, are the fastest land animals — but no human has ever run faster than 45km/h.",
    "a": "True",
    "fact": "Usain Bolt's top recorded speed was about 44.7km/h during his 100m world record."
  },
  {
    "id": 168,
    "cat": "Sport",
    "type": "open",
    "q": "What is the maximum break possible in a single frame of snooker?",
    "a": "147"
  },
  {
    "id": 169,
    "cat": "Sport",
    "type": "mcq",
    "q": "Which country did tennis legend Roger Federer represent?",
    "a": "Switzerland",
    "opts": [
      "Switzerland",
      "Sweden",
      "Austria",
      "Germany"
    ]
  },
  {
    "id": 170,
    "cat": "Sport",
    "type": "estimate",
    "q": "How long, in minutes, is a standard football (soccer) match, excluding extra time?",
    "a": "90"
  },
  {
    "id": 171,
    "cat": "Sport",
    "type": "open",
    "q": "In which sport do competitors use a 'foil', 'épée' or 'sabre'?",
    "a": "Fencing"
  },
  {
    "id": 172,
    "cat": "Sport",
    "type": "mcq",
    "q": "Which country traditionally dominates men's marathon running, producing many world record holders?",
    "a": "Kenya",
    "opts": [
      "Ethiopia",
      "Kenya",
      "Morocco",
      "Uganda"
    ],
    "fact": "Kenya and Ethiopia both dominate distance running, but Kenya currently holds the marathon world record via Eliud Kipchoge et al."
  },
  {
    "id": 173,
    "cat": "Sport",
    "type": "tf",
    "q": "A game of table tennis is traditionally played to 11 points.",
    "a": "True"
  },
  {
    "id": 174,
    "cat": "Sport",
    "type": "open",
    "q": "What is the name of the trophy awarded to the winner of the men's football World Cup?",
    "a": "The FIFA World Cup Trophy"
  },
  {
    "id": 175,
    "cat": "Sport",
    "type": "mcq",
    "q": "In American football, how many points is a touchdown worth (before extra kick)?",
    "a": "6",
    "opts": [
      "6",
      "7",
      "3",
      "8"
    ]
  },
  {
    "id": 176,
    "cat": "Sport",
    "type": "estimate",
    "q": "How many Grand Slam tennis tournaments are there per year?",
    "a": "4"
  },
  {
    "id": 177,
    "cat": "Sport",
    "type": "open",
    "q": "Which sport features the 'Ashes', a rivalry between England and Australia?",
    "a": "Cricket"
  },
  {
    "id": 178,
    "cat": "Sport",
    "type": "mcq",
    "q": "In which sport might you execute a 'triple axel'?",
    "a": "Figure skating",
    "opts": [
      "Gymnastics",
      "Figure skating",
      "Diving",
      "Ski jumping"
    ]
  },
  {
    "id": 179,
    "cat": "Sport",
    "type": "tf",
    "q": "Netball is one of the most popular sports for women in Namibia and much of southern Africa.",
    "a": "True"
  },
  {
    "id": 180,
    "cat": "Sport",
    "type": "open",
    "q": "How many rings are on the Olympic flag?",
    "a": "5"
  },
  {
    "id": 181,
    "cat": "Music",
    "type": "open",
    "q": "Which British band released the album 'Abbey Road' in 1969?",
    "a": "The Beatles"
  },
  {
    "id": 182,
    "cat": "Music",
    "type": "mcq",
    "q": "Which instrument has 88 keys?",
    "a": "Piano",
    "opts": [
      "Organ",
      "Piano",
      "Harpsichord",
      "Accordion"
    ]
  },
  {
    "id": 183,
    "cat": "Music",
    "type": "tf",
    "q": "Beethoven was completely deaf by the time he composed his Ninth Symphony.",
    "a": "True"
  },
  {
    "id": 184,
    "cat": "Music",
    "type": "open",
    "q": "Which pop star is known as the 'Queen of Pop'?",
    "a": "Madonna"
  },
  {
    "id": 185,
    "cat": "Music",
    "type": "mcq",
    "q": "What genre of music originated in New Orleans in the late 19th/early 20th century?",
    "a": "Jazz",
    "opts": [
      "Blues",
      "Jazz",
      "Gospel",
      "Ragtime"
    ]
  },
  {
    "id": 186,
    "cat": "Music",
    "type": "estimate",
    "q": "How many strings does a standard classical guitar have?",
    "a": "6"
  },
  {
    "id": 187,
    "cat": "Music",
    "type": "open",
    "q": "Which Swedish pop group released hits like 'Dancing Queen' and 'Mamma Mia'?",
    "a": "ABBA"
  },
  {
    "id": 188,
    "cat": "Music",
    "type": "mcq",
    "q": "Which musician is known as 'The King of Pop'?",
    "a": "Michael Jackson",
    "opts": [
      "Elvis Presley",
      "Michael Jackson",
      "Prince",
      "James Brown"
    ]
  },
  {
    "id": 189,
    "cat": "Music",
    "type": "tf",
    "q": "Mozart began composing music before the age of 6.",
    "a": "True"
  },
  {
    "id": 190,
    "cat": "Music",
    "type": "open",
    "q": "What instrument is most associated with Louis Armstrong?",
    "a": "The trumpet"
  },
  {
    "id": 191,
    "cat": "Music",
    "type": "mcq",
    "q": "Which South African singer became internationally known for the song 'Pata Pata' and was a fierce opponent of apartheid?",
    "a": "Miriam Makeba",
    "opts": [
      "Miriam Makeba",
      "Brenda Fassie",
      "Yvonne Chaka Chaka",
      "Letta Mbulu"
    ]
  },
  {
    "id": 192,
    "cat": "Music",
    "type": "estimate",
    "q": "In what decade did reggae music emerge from Jamaica?",
    "a": "1960s"
  },
  {
    "id": 193,
    "cat": "Music",
    "type": "open",
    "q": "Which composer wrote 'The Four Seasons'?",
    "a": "Antonio Vivaldi"
  },
  {
    "id": 194,
    "cat": "Music",
    "type": "mcq",
    "q": "Which music genre is characterised by rhythmic speech and originated in the Bronx, New York?",
    "a": "Hip hop / rap",
    "opts": [
      "Hip hop / rap",
      "R&B",
      "Funk",
      "Disco"
    ]
  },
  {
    "id": 195,
    "cat": "Music",
    "type": "tf",
    "q": "The Eurovision Song Contest has run continuously since 1956.",
    "a": "True"
  },
  {
    "id": 196,
    "cat": "Music",
    "type": "open",
    "q": "Which instrument family does the cello belong to?",
    "a": "The string family"
  },
  {
    "id": 197,
    "cat": "Music",
    "type": "mcq",
    "q": "Which Australian band is known for the song 'Down Under'?",
    "a": "Men at Work",
    "opts": [
      "INXS",
      "Men at Work",
      "AC/DC",
      "Crowded House"
    ]
  },
  {
    "id": 198,
    "cat": "Music",
    "type": "open",
    "q": "What is the term for a group of singers performing together without instruments?",
    "a": "A cappella / an a cappella group"
  },
  {
    "id": 199,
    "cat": "Music",
    "type": "mcq",
    "q": "Which iconic guitarist and singer fronted the band Queen?",
    "a": "Freddie Mercury",
    "opts": [
      "Freddie Mercury",
      "Brian May",
      "Roger Taylor",
      "John Deacon"
    ]
  },
  {
    "id": 200,
    "cat": "Music",
    "type": "estimate",
    "q": "How many members were originally in the band ABBA?",
    "a": "4"
  },
  {
    "id": 201,
    "cat": "Music",
    "type": "open",
    "q": "Which composer, though he went deaf, is famous for the 'Moonlight Sonata'?",
    "a": "Ludwig van Beethoven"
  },
  {
    "id": 202,
    "cat": "Music",
    "type": "mcq",
    "q": "What is the name of Beyoncé's former girl group?",
    "a": "Destiny's Child",
    "opts": [
      "Destiny's Child",
      "TLC",
      "En Vogue",
      "Spice Girls"
    ]
  },
  {
    "id": 203,
    "cat": "Music",
    "type": "tf",
    "q": "The didgeridoo is a traditional wind instrument of Indigenous Australians.",
    "a": "True"
  },
  {
    "id": 204,
    "cat": "Music",
    "type": "open",
    "q": "Which musical instrument is 'plucked' and commonly associated with traditional Irish and folk music, having a triangular shape and many strings?",
    "a": "The harp"
  },
  {
    "id": 205,
    "cat": "Music",
    "type": "mcq",
    "q": "Which record label, founded in Detroit, was central to the 'Motown sound' of the 1960s?",
    "a": "Motown Records",
    "opts": [
      "Motown Records",
      "Atlantic Records",
      "Columbia Records",
      "Stax Records"
    ]
  },
  {
    "id": 206,
    "cat": "Music",
    "type": "estimate",
    "q": "How many Grammy Awards has Beyoncé won across her career (as the most-awarded artist in Grammy history)?",
    "a": "More than 30"
  },
  {
    "id": 207,
    "cat": "Music",
    "type": "open",
    "q": "Which classical composer is known for the '1812 Overture'?",
    "a": "Pyotr Ilyich Tchaikovsky"
  },
  {
    "id": 208,
    "cat": "Music",
    "type": "mcq",
    "q": "Which instrument is central to traditional Mariachi music?",
    "a": "The trumpet (alongside violins and guitars)",
    "opts": [
      "The trumpet (alongside violins and guitars)",
      "The saxophone",
      "The accordion only",
      "The piano"
    ]
  },
  {
    "id": 209,
    "cat": "Music",
    "type": "tf",
    "q": "Namibian and southern African music traditions include the use of the 'mbira', or thumb piano.",
    "a": "True"
  },
  {
    "id": 210,
    "cat": "Music",
    "type": "open",
    "q": "Which iconic 1970s disco group sang 'I Will Survive'?",
    "a": "Gloria Gaynor"
  },
  {
    "id": 211,
    "cat": "Music",
    "type": "mcq",
    "q": "Which country is generally credited as the birthplace of the tango?",
    "a": "Argentina",
    "opts": [
      "Spain",
      "Argentina",
      "Brazil",
      "Mexico"
    ]
  },
  {
    "id": 212,
    "cat": "Music",
    "type": "estimate",
    "q": "How many operas did Mozart compose in his lifetime (roughly)?",
    "a": "About 20"
  },
  {
    "id": 213,
    "cat": "Music",
    "type": "open",
    "q": "Which instrument is famously played by a snake charmer, though snakes actually respond to movement rather than sound?",
    "a": "The pungi (a wind instrument)"
  },
  {
    "id": 214,
    "cat": "Food & Drink",
    "type": "open",
    "q": "What is the main ingredient in traditional hummus?",
    "a": "Chickpeas"
  },
  {
    "id": 215,
    "cat": "Food & Drink",
    "type": "mcq",
    "q": "Which country is the origin of the dish 'sushi'?",
    "a": "Japan",
    "opts": [
      "China",
      "Japan",
      "Korea",
      "Thailand"
    ]
  },
  {
    "id": 216,
    "cat": "Food & Drink",
    "type": "tf",
    "q": "Honey never spoils if stored properly.",
    "a": "True"
  },
  {
    "id": 217,
    "cat": "Food & Drink",
    "type": "open",
    "q": "What type of pastry is used to make a traditional croissant?",
    "a": "Laminated (butter-layered) dough"
  },
  {
    "id": 218,
    "cat": "Food & Drink",
    "type": "mcq",
    "q": "Which spice is derived from the Crocus flower and is the most expensive by weight?",
    "a": "Saffron",
    "opts": [
      "Saffron",
      "Cardamom",
      "Vanilla",
      "Cinnamon"
    ]
  },
  {
    "id": 219,
    "cat": "Food & Drink",
    "type": "estimate",
    "q": "How many teaspoons of sugar, roughly, are in a standard can of cola?",
    "a": "About 9-10 teaspoons"
  },
  {
    "id": 220,
    "cat": "Food & Drink",
    "type": "open",
    "q": "What is the French term for a chef who oversees a kitchen?",
    "a": "Chef de cuisine (or simply 'chef')"
  },
  {
    "id": 221,
    "cat": "Food & Drink",
    "type": "mcq",
    "q": "Which fruit is used to make traditional guacamole?",
    "a": "Avocado",
    "opts": [
      "Avocado",
      "Mango",
      "Papaya",
      "Kiwi"
    ]
  },
  {
    "id": 222,
    "cat": "Food & Drink",
    "type": "tf",
    "q": "South Africa's braai (barbecue) culture is deeply embedded across much of southern Africa, including Namibia.",
    "a": "True"
  },
  {
    "id": 223,
    "cat": "Food & Drink",
    "type": "open",
    "q": "What grain is the main ingredient in traditional Ethiopian and Eritrean injera bread?",
    "a": "Teff"
  },
  {
    "id": 224,
    "cat": "Food & Drink",
    "type": "mcq",
    "q": "Which drink is traditionally made by fermenting grapes?",
    "a": "Wine",
    "opts": [
      "Beer",
      "Wine",
      "Cider",
      "Mead"
    ]
  },
  {
    "id": 225,
    "cat": "Food & Drink",
    "type": "estimate",
    "q": "How many varieties of cheese does France produce, roughly (a commonly cited figure)?",
    "a": "Over 1,000 (some say up to 1,600)"
  },
  {
    "id": 226,
    "cat": "Food & Drink",
    "type": "open",
    "q": "What is the name of the spicy, dried and cured meat snack popular across southern Africa, often made from beef or game?",
    "a": "Biltong"
  },
  {
    "id": 227,
    "cat": "Food & Drink",
    "type": "mcq",
    "q": "Which country is the origin of the potato, later spread worldwide by European explorers?",
    "a": "Peru (South America / the Andes)",
    "opts": [
      "Ireland",
      "Peru (South America / the Andes)",
      "Spain",
      "Germany"
    ]
  },
  {
    "id": 228,
    "cat": "Food & Drink",
    "type": "tf",
    "q": "Chocolate was originally consumed as a bitter drink by the Aztecs and Maya, not as a solid sweet.",
    "a": "True"
  },
  {
    "id": 229,
    "cat": "Food & Drink",
    "type": "open",
    "q": "What is the main ingredient in traditional Spanish paella?",
    "a": "Rice"
  },
  {
    "id": 230,
    "cat": "Food & Drink",
    "type": "mcq",
    "q": "Which country produces the most coffee in the world?",
    "a": "Brazil",
    "opts": [
      "Colombia",
      "Brazil",
      "Vietnam",
      "Ethiopia"
    ]
  },
  {
    "id": 231,
    "cat": "Food & Drink",
    "type": "open",
    "q": "Which African country is widely regarded as the birthplace of coffee?",
    "a": "Ethiopia"
  },
  {
    "id": 232,
    "cat": "Food & Drink",
    "type": "mcq",
    "q": "What is 'biltong' traditionally seasoned with, alongside vinegar and coriander?",
    "a": "Salt and pepper",
    "opts": [
      "Salt and pepper",
      "Only chili",
      "Only sugar",
      "Soy sauce"
    ]
  },
  {
    "id": 233,
    "cat": "Food & Drink",
    "type": "estimate",
    "q": "How many calories, roughly, are in a standard 330ml can of beer?",
    "a": "About 140-150"
  },
  {
    "id": 234,
    "cat": "Food & Drink",
    "type": "open",
    "q": "What is the German word for beer purity law, established in 1516?",
    "a": "Reinheitsgebot"
  },
  {
    "id": 235,
    "cat": "Food & Drink",
    "type": "mcq",
    "q": "Which nut is used to make traditional marzipan?",
    "a": "Almonds",
    "opts": [
      "Almonds",
      "Pistachios",
      "Walnuts",
      "Cashews"
    ]
  },
  {
    "id": 236,
    "cat": "Food & Drink",
    "type": "tf",
    "q": "Rooibos tea, popular across southern Africa, is naturally caffeine-free.",
    "a": "True"
  },
  {
    "id": 237,
    "cat": "Food & Drink",
    "type": "open",
    "q": "What is the name of the fermented milk drink popular in Central Asia, traditionally made from mare's milk?",
    "a": "Kumis"
  },
  {
    "id": 238,
    "cat": "Food & Drink",
    "type": "mcq",
    "q": "Which country is traditionally credited with inventing pizza in its modern form?",
    "a": "Italy",
    "opts": [
      "Italy",
      "Greece",
      "France",
      "USA"
    ]
  },
  {
    "id": 239,
    "cat": "Food & Drink",
    "type": "estimate",
    "q": "Roughly what percentage of the world's vanilla supply comes from Madagascar?",
    "a": "About 80%"
  },
  {
    "id": 240,
    "cat": "Food & Drink",
    "type": "open",
    "q": "What vegetable is the main ingredient in traditional coleslaw?",
    "a": "Cabbage"
  },
  {
    "id": 241,
    "cat": "Food & Drink",
    "type": "mcq",
    "q": "Which drink is made by roasting and grinding the seeds of the Coffea plant?",
    "a": "Coffee",
    "opts": [
      "Coffee",
      "Tea",
      "Cocoa",
      "Chicory"
    ]
  },
  {
    "id": 242,
    "cat": "Food & Drink",
    "type": "tf",
    "q": "Windhoek Lager, a popular Namibian beer, is brewed according to the German purity law (Reinheitsgebot).",
    "a": "True"
  },
  {
    "id": 243,
    "cat": "Food & Drink",
    "type": "open",
    "q": "What is the name of the flatbread traditionally used to scoop up stews in West African cuisine, made from cassava or yam?",
    "a": "Fufu"
  },
  {
    "id": 244,
    "cat": "Food & Drink",
    "type": "mcq",
    "q": "Which spice gives traditional curry its yellow colour?",
    "a": "Turmeric",
    "opts": [
      "Turmeric",
      "Paprika",
      "Saffron",
      "Cumin"
    ]
  },
  {
    "id": 245,
    "cat": "Food & Drink",
    "type": "open",
    "q": "What is the traditional Afrikaans/South African dried sausage called, similar to biltong but sliceable?",
    "a": "Droëwors"
  },
  {
    "id": 246,
    "cat": "General Knowledge",
    "type": "open",
    "q": "What does 'www' stand for in a website address?",
    "a": "World Wide Web"
  },
  {
    "id": 247,
    "cat": "General Knowledge",
    "type": "mcq",
    "q": "How many sides does a hexagon have?",
    "a": "6",
    "opts": [
      "5",
      "6",
      "7",
      "8"
    ]
  },
  {
    "id": 248,
    "cat": "General Knowledge",
    "type": "tf",
    "q": "A 'group of crows' is called a 'murder'.",
    "a": "True"
  },
  {
    "id": 249,
    "cat": "General Knowledge",
    "type": "open",
    "q": "What is the tallest man-made structure in the world (as of recent years)?",
    "a": "The Burj Khalifa, Dubai"
  },
  {
    "id": 250,
    "cat": "General Knowledge",
    "type": "mcq",
    "q": "Which of these is not a primary colour in traditional colour theory (paint)?",
    "a": "Green",
    "opts": [
      "Red",
      "Blue",
      "Yellow",
      "Green"
    ]
  },
  {
    "id": 251,
    "cat": "General Knowledge",
    "type": "estimate",
    "q": "How many letters are in the English alphabet?",
    "a": "26"
  },
  {
    "id": 252,
    "cat": "General Knowledge",
    "type": "open",
    "q": "What is the world's most widely spoken native language (by number of native speakers)?",
    "a": "Mandarin Chinese"
  },
  {
    "id": 253,
    "cat": "General Knowledge",
    "type": "mcq",
    "q": "In Roman numerals, what number does 'X' represent?",
    "a": "10",
    "opts": [
      "5",
      "10",
      "50",
      "100"
    ]
  },
  {
    "id": 254,
    "cat": "General Knowledge",
    "type": "tf",
    "q": "Mount Everest grows a few millimetres taller each year due to tectonic activity.",
    "a": "True"
  },
  {
    "id": 255,
    "cat": "General Knowledge",
    "type": "open",
    "q": "What is the name for a shape with 8 sides?",
    "a": "An octagon"
  },
  {
    "id": 256,
    "cat": "General Knowledge",
    "type": "mcq",
    "q": "Which of these words means 'a fear of spiders'?",
    "a": "Arachnophobia",
    "opts": [
      "Arachnophobia",
      "Claustrophobia",
      "Ophidiophobia",
      "Acrophobia"
    ]
  },
  {
    "id": 257,
    "cat": "General Knowledge",
    "type": "estimate",
    "q": "How many bones does a shark's skeleton contain (they're made of cartilage instead)?",
    "a": "0"
  },
  {
    "id": 258,
    "cat": "General Knowledge",
    "type": "open",
    "q": "What is the collective noun for a group of lions?",
    "a": "A pride"
  },
  {
    "id": 259,
    "cat": "General Knowledge",
    "type": "mcq",
    "q": "Which everyday item was originally called a 'Kodak Instamatic' innovation?",
    "a": "A camera",
    "opts": [
      "A camera",
      "A telephone",
      "A radio",
      "A television"
    ]
  },
  {
    "id": 260,
    "cat": "General Knowledge",
    "type": "tf",
    "q": "The shortest war in recorded history, between Britain and Zanzibar in 1896, lasted under an hour.",
    "a": "True",
    "fact": "It's estimated to have lasted around 38 to 45 minutes."
  },
  {
    "id": 261,
    "cat": "General Knowledge",
    "type": "open",
    "q": "What does 'GPS' stand for?",
    "a": "Global Positioning System"
  },
  {
    "id": 262,
    "cat": "General Knowledge",
    "type": "mcq",
    "q": "Which of these is the correct plural of 'octopus' most widely accepted in English usage?",
    "a": "Octopuses",
    "opts": [
      "Octopi",
      "Octopuses",
      "Octopa",
      "Octopusses"
    ],
    "fact": "Both 'octopuses' and 'octopi' are used, but 'octopuses' is more linguistically correct given the word's Greek origin."
  },
  {
    "id": 263,
    "cat": "General Knowledge",
    "type": "estimate",
    "q": "How many time zones does mainland Namibia and its neighbours typically span (Namibia itself uses just one)?",
    "a": "Namibia uses a single time zone (CAT/WAT depending on season)"
  },
  {
    "id": 264,
    "cat": "General Knowledge",
    "type": "open",
    "q": "What is the name for words that are spelled the same forwards and backwards, like 'level' or 'radar'?",
    "a": "A palindrome"
  },
  {
    "id": 265,
    "cat": "General Knowledge",
    "type": "mcq",
    "q": "Which continent is the largest by land area?",
    "a": "Asia",
    "opts": [
      "Africa",
      "Asia",
      "North America",
      "Europe"
    ]
  },
  {
    "id": 266,
    "cat": "General Knowledge",
    "type": "tf",
    "q": "A 'jiffy' is an actual unit of time in physics, equal to a very small fraction of a second.",
    "a": "True"
  },
  {
    "id": 267,
    "cat": "General Knowledge",
    "type": "open",
    "q": "What is the term for a word that sounds the same as another but has a different meaning and spelling (like 'flour' and 'flower')?",
    "a": "A homophone"
  },
  {
    "id": 268,
    "cat": "General Knowledge",
    "type": "mcq",
    "q": "How many degrees are there in a right angle?",
    "a": "90",
    "opts": [
      "45",
      "90",
      "180",
      "60"
    ]
  },
  {
    "id": 269,
    "cat": "General Knowledge",
    "type": "estimate",
    "q": "How many colours are traditionally listed in a rainbow?",
    "a": "7"
  },
  {
    "id": 270,
    "cat": "General Knowledge",
    "type": "open",
    "q": "What is the term for an area of land completely surrounded by another country?",
    "a": "An enclave"
  },
  {
    "id": 271,
    "cat": "General Knowledge",
    "type": "mcq",
    "q": "Which of these is the correct term for a fear of open or crowded spaces?",
    "a": "Agoraphobia",
    "opts": [
      "Agoraphobia",
      "Claustrophobia",
      "Xenophobia",
      "Nyctophobia"
    ]
  },
  {
    "id": 272,
    "cat": "General Knowledge",
    "type": "tf",
    "q": "Namibia was one of the last African countries to gain independence, doing so in 1990.",
    "a": "True"
  },
  {
    "id": 273,
    "cat": "General Knowledge",
    "type": "open",
    "q": "What do you call a word made up of the first letters of a group of words, like 'NASA' or 'SCUBA'?",
    "a": "An acronym"
  },
  {
    "id": 274,
    "cat": "General Knowledge",
    "type": "mcq",
    "q": "Which of these units is used to measure the brightness of light?",
    "a": "Lumens",
    "opts": [
      "Lumens",
      "Watts",
      "Decibels",
      "Newtons"
    ]
  },
  {
    "id": 275,
    "cat": "General Knowledge",
    "type": "estimate",
    "q": "How many countries currently border Switzerland?",
    "a": "5 (France, Germany, Austria, Liechtenstein, Italy)"
  },
  {
    "id": 276,
    "cat": "General Knowledge",
    "type": "open",
    "q": "What is the name for a fear of the number 13?",
    "a": "Triskaidekaphobia"
  },
  {
    "id": 277,
    "cat": "General Knowledge",
    "type": "mcq",
    "q": "Which of these is the odd one out: kilometre, litre, gram, mile?",
    "a": "Mile",
    "opts": [
      "Kilometre",
      "Litre",
      "Gram",
      "Mile"
    ],
    "fact": "Mile is an imperial unit; the others are metric."
  },
  {
    "id": 278,
    "cat": "Namibia & Africa",
    "type": "open",
    "q": "What is the capital city of Namibia?",
    "a": "Windhoek"
  },
  {
    "id": 279,
    "cat": "Namibia & Africa",
    "type": "mcq",
    "q": "In what year did Namibia gain independence?",
    "a": "1990",
    "opts": [
      "1980",
      "1990",
      "1994",
      "2000"
    ],
    "fact": "Namibia became independent from South Africa on 21 March 1990."
  },
  {
    "id": 280,
    "cat": "Namibia & Africa",
    "type": "open",
    "q": "Which country ruled Namibia before independence, administering it under a League of Nations/UN mandate?",
    "a": "South Africa"
  },
  {
    "id": 281,
    "cat": "Namibia & Africa",
    "type": "mcq",
    "q": "Namibia was originally colonised by which European power, as 'German South West Africa'?",
    "a": "Germany",
    "opts": [
      "Britain",
      "Germany",
      "Portugal",
      "Belgium"
    ]
  },
  {
    "id": 282,
    "cat": "Namibia & Africa",
    "type": "tf",
    "q": "Namibia was the first country in the world to write environmental protection into its constitution.",
    "a": "True"
  },
  {
    "id": 283,
    "cat": "Namibia & Africa",
    "type": "open",
    "q": "What desert, considered one of the oldest in the world, gives Namibia its name?",
    "a": "The Namib Desert"
  },
  {
    "id": 284,
    "cat": "Namibia & Africa",
    "type": "estimate",
    "q": "Roughly how old is the Namib Desert estimated to be, in millions of years?",
    "a": "Between 55 and 80 million years"
  },
  {
    "id": 285,
    "cat": "Namibia & Africa",
    "type": "mcq",
    "q": "What is the tallest sand dune in the Sossusvlei area of the Namib Desert called?",
    "a": "Big Daddy",
    "opts": [
      "Dune 45",
      "Big Daddy",
      "Big Mama",
      "Elim Dune"
    ],
    "fact": "Big Daddy stands at around 325 metres."
  },
  {
    "id": 286,
    "cat": "Namibia & Africa",
    "type": "estimate",
    "q": "How tall, in metres, is Big Daddy dune at Sossusvlei?",
    "a": "325m"
  },
  {
    "id": 287,
    "cat": "Namibia & Africa",
    "type": "open",
    "q": "What is the name of the famous dried-out clay pan near Sossusvlei, dotted with centuries-old dead camel thorn trees?",
    "a": "Deadvlei"
  },
  {
    "id": 288,
    "cat": "Namibia & Africa",
    "type": "mcq",
    "q": "Which dune, located near Walvis Bay, is considered the tallest in the entire Namib Desert at 388m?",
    "a": "Dune 7",
    "opts": [
      "Dune 45",
      "Big Daddy",
      "Dune 7",
      "Big Mama"
    ]
  },
  {
    "id": 289,
    "cat": "Namibia & Africa",
    "type": "tf",
    "q": "Dune 45, a famous sunrise-climbing spot, gets its name from being 45km from the Sesriem gate.",
    "a": "True"
  },
  {
    "id": 290,
    "cat": "Namibia & Africa",
    "type": "open",
    "q": "What is the name of Namibia's rugged, remote Atlantic coastline, notorious for shipwrecks and named for the bones once found along its shore?",
    "a": "The Skeleton Coast"
  },
  {
    "id": 291,
    "cat": "Namibia & Africa",
    "type": "mcq",
    "q": "Which large national park in northern Namibia is famous for a vast salt pan visible from space?",
    "a": "Etosha National Park",
    "opts": [
      "Etosha National Park",
      "Waterberg Plateau Park",
      "Bwabwata National Park",
      "Mudumu National Park"
    ]
  },
  {
    "id": 292,
    "cat": "Namibia & Africa",
    "type": "open",
    "q": "What is the name for the huge, dazzling white salt pan at the heart of Etosha National Park?",
    "a": "The Etosha Pan"
  },
  {
    "id": 293,
    "cat": "Namibia & Africa",
    "type": "estimate",
    "q": "How long, in kilometres, is Namibia's Fish River Canyon — Africa's largest canyon?",
    "a": "About 160km long"
  },
  {
    "id": 294,
    "cat": "Namibia & Africa",
    "type": "mcq",
    "q": "Fish River Canyon is often said to be the second-largest canyon in the world, after which one?",
    "a": "The Grand Canyon",
    "opts": [
      "The Grand Canyon",
      "The Copper Canyon",
      "Yarlung Tsangpo Grand Canyon",
      "The Blyde River Canyon"
    ]
  },
  {
    "id": 295,
    "cat": "Namibia & Africa",
    "type": "tf",
    "q": "Namibia is one of the least densely populated countries on Earth, second only to Mongolia.",
    "a": "True"
  },
  {
    "id": 296,
    "cat": "Namibia & Africa",
    "type": "open",
    "q": "What is Namibia's official language, chosen at independence to unite its many ethnic groups?",
    "a": "English"
  },
  {
    "id": 297,
    "cat": "Namibia & Africa",
    "type": "mcq",
    "q": "Which indigenous group of northern Namibia is widely known for the striking red ochre paste they apply to their skin and hair?",
    "a": "The Himba",
    "opts": [
      "The Himba",
      "The San",
      "The Herero",
      "The Damara"
    ]
  },
  {
    "id": 298,
    "cat": "Namibia & Africa",
    "type": "open",
    "q": "Which ancient hunter-gatherer people, among the oldest cultures in the world, are historically associated with the Kalahari region spanning Namibia, Botswana and South Africa?",
    "a": "The San people (Bushmen)"
  },
  {
    "id": 299,
    "cat": "Namibia & Africa",
    "type": "mcq",
    "q": "Namibia's currency, the Namibian Dollar, is pegged 1:1 to which other currency and is used interchangeably with it in Namibia?",
    "a": "The South African Rand",
    "opts": [
      "The US Dollar",
      "The South African Rand",
      "The Botswana Pula",
      "The Euro"
    ]
  },
  {
    "id": 300,
    "cat": "Namibia & Africa",
    "type": "tf",
    "q": "Namibia is home to the largest free-roaming population of black rhinos in the world.",
    "a": "True"
  },
  {
    "id": 301,
    "cat": "Namibia & Africa",
    "type": "open",
    "q": "What strange, ancient, ground-hugging desert plant, found only in the Namib Desert and living over a thousand years, has just two continuously growing leaves for its entire life?",
    "a": "The Welwitschia (Welwitschia mirabilis)"
  },
  {
    "id": 302,
    "cat": "Namibia & Africa",
    "type": "mcq",
    "q": "Which coastal Namibian town, popular with tourists, was founded by German settlers and retains strong Bavarian-style architecture?",
    "a": "Swakopmund",
    "opts": [
      "Swakopmund",
      "Walvis Bay",
      "Lüderitz",
      "Oranjemund"
    ]
  },
  {
    "id": 303,
    "cat": "Namibia & Africa",
    "type": "open",
    "q": "Which Namibian coastal town is a major port and known for its lagoon and large flamingo populations?",
    "a": "Walvis Bay"
  },
  {
    "id": 304,
    "cat": "Namibia & Africa",
    "type": "mcq",
    "q": "What is the name of the huge colony of Cape fur seals found on Namibia's coast, one of the largest in the world?",
    "a": "Cape Cross",
    "opts": [
      "Cape Cross",
      "Cape Point",
      "Cape Frio",
      "Cape Fria"
    ]
  },
  {
    "id": 305,
    "cat": "Namibia & Africa",
    "type": "tf",
    "q": "Namibia has the largest population of free-ranging cheetahs of any country in the world.",
    "a": "True"
  },
  {
    "id": 306,
    "cat": "Namibia & Africa",
    "type": "open",
    "q": "What is the name of the strange, twisted, endemic trees found in the Quiver Tree Forest near Keetmanshoop, actually a species of aloe?",
    "a": "Quiver trees (Aloe dichotoma / kokerboom)"
  },
  {
    "id": 307,
    "cat": "Namibia & Africa",
    "type": "mcq",
    "q": "In March 2025, Namibia inaugurated its first female president. What is her name?",
    "a": "Netumbo Nandi-Ndaitwah",
    "opts": [
      "Netumbo Nandi-Ndaitwah",
      "Saara Kuugongelwa-Amadhila",
      "Hage Geingob",
      "Hifikepunye Pohamba"
    ],
    "fact": "Her inauguration coincided with Namibia's 35th independence anniversary."
  },
  {
    "id": 308,
    "cat": "Namibia & Africa",
    "type": "open",
    "q": "What is the name of the UNESCO World Heritage rock engraving site in Damaraland, home to thousands of ancient San petroglyphs?",
    "a": "Twyfelfontein"
  },
  {
    "id": 309,
    "cat": "Namibia & Africa",
    "type": "mcq",
    "q": "Namibia's road network is famous among self-drive travellers for having far more of which type of road than tarred?",
    "a": "Gravel roads",
    "opts": [
      "Gravel roads",
      "Cobblestone roads",
      "Dirt tracks with no maintenance",
      "Toll roads"
    ],
    "fact": "Namibia has roughly 37,000km of gravel roads compared to around 5,450km of tarred roads."
  },
  {
    "id": 310,
    "cat": "Namibia & Africa",
    "type": "open",
    "q": "What is the name of Namibia's main international airport, serving Windhoek?",
    "a": "Hosea Kutako International Airport"
  },
  {
    "id": 311,
    "cat": "Namibia & Africa",
    "type": "mcq",
    "q": "Which large antelope, Namibia's national animal, is known for its striking straight horns and appears on the country's coat of arms?",
    "a": "The oryx (gemsbok)",
    "opts": [
      "The kudu",
      "The oryx (gemsbok)",
      "The springbok",
      "The eland"
    ]
  },
  {
    "id": 312,
    "cat": "Namibia & Africa",
    "type": "tf",
    "q": "The oryx (gemsbok) can survive for long periods without drinking water, getting most of its moisture from plants.",
    "a": "True"
  },
  {
    "id": 313,
    "cat": "Namibia & Africa",
    "type": "open",
    "q": "Which major river forms much of the border between Namibia and Angola?",
    "a": "The Kunene River (also spelled Cunene)"
  },
  {
    "id": 314,
    "cat": "Namibia & Africa",
    "type": "mcq",
    "q": "Which river forms Namibia's northeastern border and gives its name to a narrow strip of Namibian territory pointing towards Zambia and Zimbabwe?",
    "a": "The Zambezi",
    "opts": [
      "The Zambezi",
      "The Okavango",
      "The Kunene",
      "The Orange"
    ],
    "fact": "This narrow strip is known as the Caprivi Strip (now the Zambezi Region)."
  },
  {
    "id": 315,
    "cat": "Namibia & Africa",
    "type": "open",
    "q": "What is the name of the narrow strip of land in northeastern Namibia, historically called the Caprivi Strip, that connects Namibia to the Zambezi River?",
    "a": "The Zambezi Region (formerly the Caprivi Strip)"
  },
  {
    "id": 316,
    "cat": "Namibia & Africa",
    "type": "mcq",
    "q": "What is the world's second-largest canyon after the Grand Canyon, found in southern Namibia?",
    "a": "Fish River Canyon",
    "opts": [
      "Fish River Canyon",
      "Sesriem Canyon",
      "Kuiseb Canyon",
      "Ugab Canyon"
    ]
  },
  {
    "id": 317,
    "cat": "Namibia & Africa",
    "type": "tf",
    "q": "Victoria Falls, one of the Seven Natural Wonders of the World, is within easy reach of a Namibia road trip via the Zambezi Region.",
    "a": "True"
  },
  {
    "id": 318,
    "cat": "Namibia & Africa",
    "type": "open",
    "q": "What is the term for Namibia's unique desert-adapted elephants, found in the Kunene region, able to survive with little water?",
    "a": "Desert-adapted elephants"
  },
  {
    "id": 319,
    "cat": "Namibia & Africa",
    "type": "mcq",
    "q": "Which country is the only one that completely surrounds another country (Lesotho) on the African continent?",
    "a": "South Africa",
    "opts": [
      "South Africa",
      "Namibia",
      "Zimbabwe",
      "Botswana"
    ]
  },
  {
    "id": 320,
    "cat": "Namibia & Africa",
    "type": "open",
    "q": "Which large African country, Namibia's eastern neighbour, is home to the Okavango Delta?",
    "a": "Botswana"
  },
  {
    "id": 321,
    "cat": "Namibia & Africa",
    "type": "mcq",
    "q": "Which is the largest country in Africa by land area?",
    "a": "Algeria",
    "opts": [
      "Algeria",
      "DR Congo",
      "Sudan",
      "Libya"
    ]
  },
  {
    "id": 322,
    "cat": "Namibia & Africa",
    "type": "estimate",
    "q": "How many countries are there in the African continent?",
    "a": "54"
  },
  {
    "id": 323,
    "cat": "Namibia & Africa",
    "type": "open",
    "q": "What is the most populous country in Africa?",
    "a": "Nigeria"
  },
  {
    "id": 324,
    "cat": "Namibia & Africa",
    "type": "mcq",
    "q": "Which mountain, Africa's tallest, is a free-standing (non-range) volcanic mountain located in Tanzania?",
    "a": "Mount Kilimanjaro",
    "opts": [
      "Mount Kenya",
      "Mount Kilimanjaro",
      "Mount Meru",
      "Mount Elgon"
    ]
  },
  {
    "id": 325,
    "cat": "Namibia & Africa",
    "type": "tf",
    "q": "The Victoria Falls, on the Zambia-Zimbabwe border, is known locally as 'Mosi-oa-Tunya', meaning 'The Smoke That Thunders'.",
    "a": "True"
  },
  {
    "id": 326,
    "cat": "Namibia & Africa",
    "type": "open",
    "q": "Which strait separates the African continent from the Arabian Peninsula at its narrowest point near Djibouti?",
    "a": "The Bab-el-Mandeb strait"
  },
  {
    "id": 327,
    "cat": "Namibia & Africa",
    "type": "mcq",
    "q": "Which African country is completely surrounded by South Africa?",
    "a": "Lesotho",
    "opts": [
      "Lesotho",
      "Eswatini",
      "Namibia",
      "Botswana"
    ]
  },
  {
    "id": 328,
    "cat": "Namibia & Africa",
    "type": "estimate",
    "q": "Roughly what percentage of the world's diamonds (by value) have historically come from Namibia and southern Africa?",
    "a": "Southern Africa has historically supplied a large share of global gem-quality diamonds, though exact figures vary by year"
  },
  {
    "id": 329,
    "cat": "Namibia & Africa",
    "type": "open",
    "q": "Which desert-dwelling big cat is Namibia particularly famous for conserving, with the country home to the world's largest population?",
    "a": "The cheetah"
  },
  {
    "id": 330,
    "cat": "Namibia & Africa",
    "type": "mcq",
    "q": "What is the name of Namibia's national football team, nicknamed after a Namibian desert-adapted animal?",
    "a": "The Brave Warriors",
    "opts": [
      "The Brave Warriors",
      "The Desert Foxes",
      "The Cheetahs",
      "The Oryx"
    ]
  },
  {
    "id": 331,
    "cat": "Namibia & Africa",
    "type": "open",
    "q": "Which famous shipwreck, visible on the sand, is one of the most photographed sights along Namibia's Skeleton Coast near Henties Bay?",
    "a": "The Zeila shipwreck (or the Eduard Bohlen, also accepted)"
  },
  {
    "id": 332,
    "cat": "Namibia & Africa",
    "type": "tf",
    "q": "Lüderitz, a Namibian coastal town, was named after a German merchant and sits near an abandoned diamond-mining ghost town called Kolmanskop.",
    "a": "True"
  },
  {
    "id": 333,
    "cat": "Namibia & Africa",
    "type": "open",
    "q": "What is the name of the abandoned German diamond-mining town near Lüderitz, now famous for its sand-filled buildings?",
    "a": "Kolmanskop"
  },
  {
    "id": 334,
    "cat": "Namibia & Africa",
    "type": "mcq",
    "q": "Namibia shares the Okavango and Zambezi river systems with which neighbouring countries, forming part of the KAZA transfrontier conservation area?",
    "a": "Angola, Zambia, Botswana and Zimbabwe",
    "opts": [
      "Angola, Zambia, Botswana and Zimbabwe",
      "Only South Africa",
      "Only Botswana",
      "Mozambique and Malawi"
    ]
  }
];
