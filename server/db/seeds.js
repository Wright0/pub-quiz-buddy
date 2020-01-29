use quizBuddy;
db.dropDatabase();

db.pubQuizzes.insertMany([
  {
    pub: "Safari Lounge",
    address: "Easter Road",
    day: "monday",
    time: "19:00",
    studentDiscount: true,
    prize: 100,
    location: { lat: 55.957235, lng: -3.167683}
  },
  {
    pub: "Amber Rose",
    address: "Castle Street",
    day: "monday",
    time: "19:30",
    studentDiscount: true,
    prize: 30,
    location: { lat: 55.951940, lng: -3.202796}
  },
  {
    pub: "Argyle Bar",
    address: "Argyle Place",
    day: "monday",
    time: "21:00",
    studentDiscount: true,
    prize: 30,
    location: { lat: 55.938412, lng: -3.191309}
  },
  {
    pub: "Barony Bar",
    address: "Broughton Street",
    day: "monday",
    time: "21:30",
    studentDiscount: false,
    prize: 25,
    location: { lat: 55.958186, lng: -3.188618}
  },
  {
    pub: "Blackbird",
    address: "home Street",
    day: "monday",
    time: "20:00",
    studentDiscount: false,
    prize: 50,
    location: { lat: 55.941169, lng: -3.203705}
  },
  {
    pub: "Bier Keller",
    address: "Picardy Place",
    day: "monday",
    time: "20:00",
    studentDiscount: false,
    prize: 30,
    location: { lat: 55.957078 , lng: -3.186713}
  },
  {
    pub: "Brass Monkey",
    address: "Leith Walk",
    day: "monday",
    time: "19:00",
    studentDiscount: true,
    prize: 50,
    location: { lat: 55.964030, lng: -3.177738}
  },
  {
    pub: "Bennets Bar",
    address: "8 Leven Street",
    day: "monday",
    time: "20:00",
    studentDiscount: false,
    prize: 50,
    location: { lat: 55.941732, lng: -3.203265}
  },
  {
    pub: "Caley Sample Room",
    address: "58 Angle Park Terrace",
    day: "monday",
    time: "20:30",
    studentDiscount: false,
    prize: 30,
    location: { lat: 55.937689, lng: -3.225854}
  },
  {
    pub: "The Cambridge Bar",
    address: "20 Young Street",
    day: "monday",
    time: "20:30",
    studentDiscount: false,
    prize: 25,
    location: { lat: 55.952787, lng: -3.206009}
  },
  {
    pub: "Corstorphine Inn",
    address: "17 Corstorphine High Street",
    day: "monday",
    time: "20:00",
    studentDiscount: false,
    prize: 25,
    location: { lat: 55.940558, lng: -3.283281}
  },
  {
    pub: "The Cuckoo’s Nest",
    address: "69 Home Street",
    day: "monday",
    time: "20:00",
    studentDiscount: true,
    prize: 30,
    location: { lat: 55.942175, lng: -3.203207}
  },
  {
    pub: "The Cumberland Bar",
    address: "3 Cumberland Street",
    day: "monday",
    time: "20:30",
    studentDiscount: false,
    prize: 10,
    location: { lat: 55.959007, lng: -3.197121}
  },
  {
    pub: "The Dog House",
    address: "22 Clerk Street",
    day: "monday",
    time: "20:00",
    studentDiscount: true,
    prize: 30,
    location: { lat: 55.942704, lng: -3.182492}
  },
  {
    pub: "The Globe Bar",
    address: "30 Niddry Street",
    day: "monday",
    time: "22:00",
    studentDiscount: false,
    prize: 50,
    location: { lat: 55.949717, lng: -3.187016}
  },
  {
    pub: "Greenmantle",
    address: "44 West Crosscauseway",
    day: "monday",
    time: "20:00",
    studentDiscount: false,
    prize: 25,
    location: { lat: 55.943921, lng: -3.183913}
  },
  {
    pub: "Hanover Tap",
    address: "112 Hanover Street",
    day: "monday",
    time: "19:30",
    studentDiscount: true,
    prize: 30,
    location: { lat: 55.954572, lng: -3.198084}
  },
  {
    pub: "The High Dive",
    address: "85 St. Leonard’s Street",
    day: "monday",
    time: "21:00",
    studentDiscount: true,
    prize: 30,
    location: { lat: 55.942187, lng: -3.179137}
  },
  {
    pub: "Jake’s Place",
    address: "13 Market Street",
    day: "monday",
    time: "20:00",
    studentDiscount: false,
    prize: 25,
    location: { lat: 55.950954, lng: -3.190336}
  },
  {
    pub: "Juniper Green Inn",
    address: "542 Lanark Road",
    day: "monday",
    time: "20:00",
    studentDiscount: false,
    prize: 25,
    location: { lat: 55.903361, lng: -3.285486}
  },
  {
    pub: "Leslies Bar",
    address: "47 Ratcliffe Terrace",
    day: "monday",
    time: "19:45",
    studentDiscount: true,
    prize: 15,
    location: { lat: 55.933933, lng: -3.178103}
  },
  {
    pub: "Malones",
    address: "242 Morrison Street",
    day: "monday",
    time: "19:00",
    studentDiscount: true,
    prize: 40,
    location: { lat: 55.946279, lng: -3.214384}
  },
  {
    pub: "Bell Inn",
    address: "‎235 Causewayside",
    day: "monday",
    time: "19:30",
    studentDiscount: true,
    prize: 30,
    location: { lat: 55.934950, lng: -3.179061}
  },
  {
    pub: "Old Chain Pier",
    address: "‎32 Trinity Crescent",
    day: "monday",
    time: "21:00",
    studentDiscount: true,
    prize: 30,
    location: { lat: 55.980038, lng: -3.204308}
  },
  {
    pub: "Outhouse",
    address: "12a Broughton Street Lane",
    day: "monday",
    time: "20:30",
    studentDiscount: true,
    prize: 35,
    location: { lat: 55.957323, lng: -3.187006}
  },
  {
    pub: "The Peartree",
    address: "38 West Nicolson Street",
    day: "monday",
    time: "21:00",
    studentDiscount: true,
    prize: 30,
    location: { lat: 55.944432, lng: -3.185297}
  },
  {
    pub: "Philly’s",
    address: "2 Lochside Place",
    day: "monday",
    time: "18:00",
    studentDiscount: true,
    prize: 25,
    location: { lat: 55.933033, lng: -3.315204}
  },
  {
    pub: "Portobello Tap",
    address: "87 Portobello High Street",
    day: "monday",
    time: "19:00",
    studentDiscount: true,
    prize: 30,
  },
  {
    pub: "The Royal Dick",
    address: "1 Summerhall Place",
    day: "monday",
    time: "19:00",
    studentDiscount: true,
    prize: 30,
    location: { lat: 55.939967, lng: -3.181507}
  },
  {
    pub: "The Tron",
    address: "9 Hunter Square",
    day: "monday",
    time: "22:00",
    studentDiscount: true,
    prize: 50,
    location: { lat: 55.949635, lng: -3.187614}
  },
  // //tuesday quizzes
  {
    pub: "Akva",
    address: "Fountainbridge",
    day: "tuesday",
    time: "20:00",
    studentDiscount: true,
    prize: 30,
    location: { lat: 55.943236, lng: -3.208383}

  },
  {
    pub: "Apothecary",
    address: "Lister Square",
    day: "tuesday",
    time: "19:00",
    studentDiscount: true,
    prize: 30,
    location: { lat: 55.943603, lng: -3.193866}
  },
  {
    pub: "Auld Hoose",
    address: "St Leonard Street",
    day: "tuesday",
    time: "20:00",
    studentDiscount: false,
    prize: 30,
    location: { lat: 55.943540, lng: -3.180200}
  },
  {
    pub: "Auld Hundred",
    address: "Rose Street",
    day: "tuesday",
    time: "20:00",
    studentDiscount: false,
    prize: 30,
    location: { lat: 55.952344, lng: -3.199284}
  },
  {
    pub: "Bailise",
    address: "St Stephen Street",
    day: "tuesday",
    time: "20:30",
    studentDiscount: false,
    prize: 30,
    location: { lat: 55.957531, lng: -3.207069}

  },
  {
    pub: "Barrel House",
    address: "Jocks Lodge",
    day: "tuesday",
    time: "20:30",
    studentDiscount: false,
    prize: 30,
    location: { lat: 55.955138, lng: -3.149665}
  },
  {
    pub: "Black Cat",
    address: "Rose Street",
    day: "tuesday",
    time: "20:00",
    studentDiscount: true,
    prize: 40,
    location: { lat: 55.951616, lng: -3.203661}
  },
  {
    pub: "the Bothy",
    address: "18 Corstorphine Road",
    day: "tuesday",
    time: "20:00",
    studentDiscount: true,
    prize: 20,
    location: { lat: 55.945618, lng: -3.243619}
  },
  {
    pub: "Brewhemia",
    address: "1a Market Street",
    day: "tuesday",
    time: "20:30",
    studentDiscount: true,
    prize: 25,
    location: { lat: 55.951172, lng: -3.188641}
  },
  {
    pub: "Candy Bar",
    address: "115 George Street",
    day: "tuesday",
    time: "19:30",
    studentDiscount: true,
    prize: 50,
    location: { lat: 55.952368, lng: -3.205146}
  },
  {
    pub: "The Dagda Bar",
    address: "95 Buccleuch Street",
    day: "tuesday",
    time: "20:30",
    studentDiscount: true,
    prize: 100,
    location: { lat: 55.942156, lng: -3.183954}
  },
  {
    pub: "Finn & Bear",
    address: "58 Shore",
    day: "tuesday",
    time: "20:00",
    studentDiscount: true,
    prize: 30,
    location: { lat: 55.975379, lng: -3.170406}
  },
  {
    pub: "The Fly Half ",
    address: "52 Constitution Street",
    day: "tuesday",
    time: "19:30",
    studentDiscount: true,
    prize: 35,
    location: { lat: 55.974792, lng: -3.167448}
  },
  {
    pub: "Golden Rule",
    address: "30 Yeaman Place",
    day: "tuesday",
    time: "20:30",
    studentDiscount: true,
    prize: 40,
    location: { lat: 55.939079, lng: -3.218765}
  },
  {
    pub: "Hectors",
    address: "49 Deanhaugh Street",
    day: "tuesday",
    time: "20:00",
    studentDiscount: true,
    prize: 40,
    location: { lat: 55.958805, lng: -3.209762}
  },
  {
    pub: "The Hermitage Bar",
    address: "5 Comiston Road",
    day: "tuesday",
    time: "20:00",
    studentDiscount: true,
    prize: 30,
    location: { lat: 55.924699, lng: -3.209648}
  },
  {
    pub: "Kilderkin",
    address: "67 Canongate",
    day: "tuesday",
    time: "20:00",
    studentDiscount: true,
    prize: 50,
    location: { lat: 55.952218, lng: -3.176881}
  },
  {
    pub: "Lebowskis",
    address: "18 Morrison Street",
    day: "tuesday",
    time: "21:00",
    studentDiscount: true,
    prize: 30,
    location: { lat: 55.945981, lng: -3.206504}
  },
  {
    pub: "Pilgrim",
    address: "3 Robertson’s Close",
    day: "tuesday",
    time: "20:00",
    studentDiscount: true,
    prize: 40,
    location: { lat: 55.948657, lng: -3.186004}
  },
  {
    pub: "The Riccarton Inn",
    address: "198 Lanark Road West",
    day: "tuesday",
    time: "21:00",
    studentDiscount: true,
    prize: 25,
    location: { lat: 55.896397, lng: -3.309502}
  },
  {
    pub: "Robbies",
    address: "367 Leith Walk",
    day: "tuesday",
    time: "19:30",
    studentDiscount: true,
    prize: 20,
    location: { lat: 55.963762, lng: -3.177484}
  },
  {
    pub: "The Salisbury Arms",
    address: "58 Dalkeith Road",
    day: "tuesday",
    time: "20:00",
    studentDiscount: true,
    prize: 30,
    location: { lat: 55.938252, lng: -3.173907}
  },
  {
    pub: "The Scottish Engineer",
    address: "76 Telford Road, Edinburgh",
    day: "tuesday",
    time: "19:30",
    studentDiscount: true,
    prize: 25,
    location: { lat: 55.961467, lng: -3.241624}
  },
  {
    pub: "Smoke & Mirrors",
    address: "159 Constitution Street",
    day: "tuesday",
    time: "20:00",
    studentDiscount: true,
    prize: 20,
    location: { lat: 55.971100, lng: -3.170249}
  },
  {
    pub: "Southpour",
    address: "5 Newington Road",
    day: "tuesday",
    time: "19:30",
    studentDiscount: true,
    prize: 30,
    location: { lat: 55.939014, lng: -3.179147}
  },
  {
    pub: "The Three Sisters",
    address: "139 Cowgate",
    day: "tuesday",
    time: "22:00",
    studentDiscount: true,
    prize: 50,
    location: { lat: 55.948373, lng: -3.189893}
  },
  // //wednesday Quizzes
  {
    pub: "Antiquary",
    address: "St Stephen Street",
    day: "wednesday",
    time: "20:30",
    studentDiscount: true,
    prize: 25,
    location: { lat: 55.957966, lng: -3.206151}
  },
  {
    pub: "Brass Monkey",
    address: "Drummond Street",
    day: "wednesday",
    time: "21:00",
    studentDiscount: true,
    prize: 20,
    location: { lat: 55.947318, lng: -3.185262}
  },
  {
    pub: "Cabaret Voltaire",
    address: "Blair Street",
    day: "wednesday",
    time: "21:00",
    studentDiscount: false,
    prize: 30,
    location: { lat: 55.948928, lng: -3.187260}
  },
  {
    pub: "Compass",
    address: "Queen Charlotte Street",
    day: "wednesday",
    time: "20:00",
    studentDiscount: false,
    prize: 15,
    location: { lat: 55.973431, lng: -3.167784}
  },
  {
    pub: "Damm 27",
    address: "Causewayside",
    day: "wednesday",
    time: "21:00",
    studentDiscount: false,
    prize: 40,
    location: { lat: 55.938645, lng: -3.181502}
  },
  {
    pub: "Eastside",
    address: "George Street",
    day: "wednesday",
    time: "19:00",
    studentDiscount: true,
    prize: 50,
    location: { lat: 55.953480, lng: -3.198924}
  },
  {
    pub: "The Empress",
    address: "25 Broughton Street",
    day: "wednesday",
    time: "20:00",
    studentDiscount: true,
    prize: 25,
    location: { lat: 55.957065, lng: -3.187952}
  },
  {
    pub: "Foundry 39",
    address: "39A Queensferry Street",
    day: "wednesday",
    time: "18:00",
    studentDiscount: true,
    prize: 50,
    location: { lat: 55.950663, lng: -3.209056}
  },
  {
    pub: "Frankenstein",
    address: "26 George IV Bridge",
    day: "wednesday",
    time: "20:00",
    studentDiscount: true,
    prize: 50,
    location: { lat: 55.947396, lng: -3.191675}
  },
  {
    pub: "The Golf Tavern",
    address: "31 Wright’s Houses",
    day: "wednesday",
    time: "21:30",
    studentDiscount: true,
    prize: 30,
    location: { lat: 55.939844, lng: -3.203631}
  },
  {
    pub: "Granary",
    address: "34 Shore",
    day: "wednesday",
    time: "18:30",
    studentDiscount: true,
    prize: 25,
    location: { lat: 55.976400, lng: -3.169381}
  },
  {
    pub: "The Green Room",
    address: "25 William Street",
    day: "wednesday",
    time: "20:00",
    studentDiscount: true,
    prize: 30,
    location: { lat: 55.976400, lng: -3.169381}
  },
  {
    pub: "Hunter’s Tryst",
    address: "97 Oxgangs Road",
    day: "wednesday",
    time: "21:00",
    studentDiscount: true,
    prize: 25,
    location: { lat: 55.902214, lng: -3.220860}
  },
  {
    pub: "Indigo Yard",
    address: "7 Charlotte Lane",
    day: "wednesday",
    time: "20:00",
    studentDiscount: true,
    prize: 50,
    location: { lat: 55.951055, lng: -3.209461}
  },
  {
    pub: "The Inverleith",
    address: "71 Elm Row, Edinburgh",
    day: "wednesday",
    time: "19:00",
    studentDiscount: true,
    prize: 20,
    location: { lat: 55.971019, lng: -3.207297}
  },
  {
    pub: "The Joker & the Thief",
    address: "10 Bowhill Terrace",
    day: "wednesday",
    time: "20:00",
    studentDiscount: true,
    prize: 25,
    location: { lat: 55.960622, lng: -3.181252}
  },
  {
    pub: "The Lord Nelson",
    address: "8 Trafalgar Street",
    day: "wednesday",
    time: "20:00",
    studentDiscount: true,
    prize: 30,
    location: { lat: 55.973797, lng: -3.185728}
  },
  {
    pub: "Mad Hatter",
    address: "8 Torphichen Place",
    day: "wednesday",
    time: "19:30",
    studentDiscount: true,
    prize: 30,
    location: { lat: 55.946546, lng: -3.214380}
  },
  {
    pub: "The Mash Tun",
    address: "154 Easter Road",
    day: "wednesday",
    time: "21:00",
    studentDiscount: true,
    prize: 25,
    location: { lat: 55.960046, lng: -3.171390}
  },
  {
    pub: "Mid Yoken",
    address: "75 Craigmount Brae",
    day: "wednesday",
    time: "20:00",
    studentDiscount: true,
    prize: 15,
    location: { lat: 55.952055, lng: -3.303244}
  },
  {
    pub: "The Norhet",
    address: "45 Main Street, Davidson’s Mains",
    day: "wednesday",
    time: "20:00",
    studentDiscount: true,
    prize: 10,
    location: { lat: 55.965635, lng: -3.272652}
  },
  {
    pub: "The Raging Bull",
    address: "161 Lothian Road",
    day: "wednesday",
    time: "20:00",
    studentDiscount: true,
    prize: 30,
    location: { lat: 55.945096, lng: -3.204968}
  },
  {
    pub: "Scotch Hop",
    address: "114 Causewayside",
    day: "wednesday",
    time: "20:00",
    studentDiscount: true,
    prize: 30,
    location: { lat: 55.937311, lng: -3.180803}
  },
  {
    pub: "Sheep Heid Inn",
    address: "114 Causewayside",
    day: "wednesday",
    time: "21:00",
    studentDiscount: true,
    prize: 30,
    location: { lat: 55.942003, lng: -3.148545}
  },
  {
    pub: "The Starbank Inn",
    address: "64 Laverockbank Road",
    day: "wednesday",
    time: "20:00",
    studentDiscount: true,
    prize: 25,
    location: { lat: 55.979844, lng: -3.202095}
  },
  {
    pub: "The Street",
    address: "2 Picardy Place",
    day: "wednesday",
    time: "21:00",
    studentDiscount: true,
    prize: 25,
    location: { lat: 55.956847, lng: -3.187755}
  },
  {
    pub: "Toby Carvery Edinburgh West",
    address: "116 St John’s Road",
    day: "wednesday",
    time: "20:00",
    studentDiscount: true,
    prize: 25,
    location: { lat: 55.942974, lng: -3.283562}
  },
  {
    pub: "Victoria",
    address: "265 Leith Walk",
    day: "wednesday",
    time: "20:00",
    studentDiscount: true,
    prize: 30,
    location: { lat: 55.965786, lng: -3.175633}
  },
  {
    pub: "Westgate Farm",
    address: "55 South Gyle Broadway",
    day: "wednesday",
    time: "20:30",
    studentDiscount: true,
    prize: 35,
    location: { lat: 55.933757, lng: -3.302907}
  },
  {
    pub: "Ye Olde Inn",
    address: "25 Main Street, Davidson’s Mains,",
    day: "wednesday",
    time: "20:00",
    studentDiscount: true,
    prize: 30,
    location: { lat: 55.965602, lng: -3.273706}
  },

  // //thursday Quizzes
  {
    pub: "Chanter",
    address: "Bread St",
    day: "thursday",
    time: "20:00",
    studentDiscount: true,
    prize: 50,
    location: { lat: 55.945765, lng: -3.203805}
  },
  {
    pub: "Footlights",
    address: "Bread St",
    day: "thursday",
    time: "21:00",
    studentDiscount: true,
    prize: 100,
    location: { lat: 55.946124, lng: -3.203530}
  },
  {
    pub: "Hanging Bat",
    address: "Lothian Road",
    day: "thursday",
    time: "18:00",
    studentDiscount: false,
    prize: 20,
    location: { lat: 55.945518, lng: -3.205157}
  },
  {
    pub: "CC Blooms",
    address: "Greenside Place",
    day: "thursday",
    time: "20:00",
    studentDiscount: true,
    prize: 25,
    location: { lat: 55.957114, lng: -3.185177}
  },
  {
    pub: "Black Bull",
    address: "Grassmarket",
    day: "thursday",
    time: "19:00",
    studentDiscount: true,
    prize: 30,
    location: { lat: 55.954272, lng: -3.187330}
  },
  {
    pub: "The Abbey",
    address: "South Clerk Street",
    day: "thursday",
    time: "21:00",
    studentDiscount: false,
    prize: 30,
    location: { lat: 55.939527, lng: -3.179607}
  },
  {
    pub: "Newsroom",
    address: "Leith Stret",
    day: "thursday",
    time: "21:00",
    studentDiscount: false,
    prize: 50,
    location: { lat: 55.953809, lng: -3.188237}
  },
  {
    pub: "Charwood",
    address: "47 Buckstone Terrace",
    day: "thursday",
    time: "21:00",
    studentDiscount: false,
    prize: 20,
  },
  {
    pub: "The City Cafe",
    address: "19 Blair Street",
    day: "thursday",
    time: "21:00",
    studentDiscount: false,
    prize: 30,
  },
  {
    pub: "Colinton Inn",
    address: "14 Bridge Road",
    day: "thursday",
    time: "20:00",
    studentDiscount: false,
    prize: 15,
  },
  {
    pub: "Etore’s",
    address: "99b Slateford Road",
    day: "thursday",
    time: "20:00",
    studentDiscount: false,
    prize: 30,
  },
  {
    pub: "Harry’s Bar",
    address: "7B Randolph Place",
    day: "thursday",
    time: "19:00",
    studentDiscount: false,
    prize: 30,
  },
  {
    pub: "The Scottie ",
    address: "100 Northfield Broadway",
    day: "thursday",
    time: "21:00",
    studentDiscount: false,
    prize: 20,
  },
  {
    pub: "Jessie Mays",
    address: "316 Gorgie Road,",
    day: "thursday",
    time: "20:30",
    studentDiscount: false,
    prize: 20,
  },
  {
    pub: "Kingsknowe",
    address: "195 Kingsknowe Road North",
    day: "thursday",
    time: "21:30",
    studentDiscount: false,
    prize: 20,
  },
  {
    pub: "Kinleith Mill",
    address: "604 Lanark Road",
    day: "thursday",
    time: "21:00",
    studentDiscount: false,
    prize: 25,
  },
  {
    pub: "The Merlin",
    address: "172 Morningside Road",
    day: "thursday",
    time: "21:00",
    studentDiscount: false,
    prize: 20,
  },
  {
    pub: "The Skylark",
    address: "241 Portobello High Street",
    day: "thursday",
    time: "20:00",
    studentDiscount: false,
    prize: 20,
  },
  {
    pub: "Smithie’s Ale House",
    address: "51 Eyre Place",
    day: "thursday",
    time: "20:30",
    studentDiscount: false,
    prize: 25,
  },
  {
    pub: "The Southsider",
    address: "7 West Richmond Street",
    day: "thursday",
    time: "21:00",
    studentDiscount: false,
    prize: 25,
  },
  {
    pub: "The Strathie",
    address: "17 Iona Street",
    day: "thursday",
    time: "19:00",
    studentDiscount: false,
    prize: 30,
  },
  {
    pub: "The Wee Pub ",
    address: "‎1 Currie’s Close",
    day: "thursday",
    time: "21:00",
    studentDiscount: false,
    prize: 50,
  },
  {
    pub: "West End Hotel",
    address: "35 Palmerston Place",
    day: "thursday",
    time: "20:30",
    studentDiscount: false,
    prize: 30,
  },
  // // friday Quizzes
  {
    pub: "Black Bull",
    address: "Grassmarket",
    day: "friday",
    time: "19:30",
    studentDiscount: false,
    prize: 40,
    location: { lat: 55.947347, lng: -3.197362}
  },
  {
    pub: "The pond",
    address: "Bath Road",
    day: "friday",
    time: "20:00",
    studentDiscount: false,
    prize: 30,
    location: { lat: 55.974584, lng: -3.160807}
  },
  {
    pub: "The Stable",
    address: "Morthonhall Gate",
    day: "friday",
    time: "20:30",
    studentDiscount: true,
    prize: 30,
    location: { lat: 55.903839, lng: -3.181332}
  },
  // // sunday Quizzes
  {
    pub: "The Artisan Bar",
    address: "London Road",
    day: "sunday",
    time: "21:00",
    studentDiscount: true,
    prize: 30,
    location: { lat: 55.957460, lng: -3.169408}
  },
  {
    pub: "Athletic Arms",
    address: "Angle Park Terrace",
    day: "sunday",
    time: "19:30",
    studentDiscount: false,
    prize: 30,
    location: { lat: 55.938991, lng: -3.223748}
  },
  {
    pub: "The Barologist",
    address: "Commercial Street",
    day: "sunday",
    time: "21:00",
    studentDiscount: true,
    prize: 40,
    location: { lat: 55.976506, lng: -3.171481}
  },
  {
    pub: "Queens Arms",
    address: "Frederick Street",
    day: "sunday",
    time: "20:00",
    studentDiscount: true,
    prize: 30,
    location: { lat: 55.953656, lng: -3.200546}
  },
  {
    pub: "Kings Wark",
    address: "Shore",
    day: "sunday",
    time: "18:00",
    studentDiscount: true,
    prize: 30,
    location: { lat: 55.976149, lng: -3.169546}
  },
  {
    pub: "Innis & Gunn",
    address: "Lothian Road",
    day: "sunday",
    time: "19:00",
    studentDiscount: true,
    prize: 30,
    location: { lat: 55.946628, lng: -3.205517}
  },

]);
