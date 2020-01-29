use quizBuddy;
db.dropDatabase();

db.pubQuizzes.insertMany([
  {
    pub: "Safari Lounge",
    address: "21 Cadzow Pl",
    day: "monday",
    time: "19:00",
    studentDiscount: true,
    prize: 100,
    location: { lat: 55.957235, lng: -3.167683}
  },
  {
    pub: "Amber Rose",
    address: "22, 26 Castle St",
    day: "monday",
    time: "19:30",
    studentDiscount: true,
    prize: 30,
    location: { lat: 55.951940, lng: -3.202796}
  },
  {
    pub: "Argyle Bar",
    address: "17 Argyle Pl",
    day: "monday",
    time: "21:00",
    studentDiscount: true,
    prize: 30,
    location: { lat: 55.938412, lng: -3.191309}
  },
  {
    pub: "Barony Bar",
    address: "5 Broughton St",
    day: "monday",
    time: "21:30",
    studentDiscount: false,
    prize: 25,
    location: { lat: 55.958186, lng: -3.188618}
  },
  {
    pub: "Blackbird",
    address: "39 Leven St",
    day: "monday",
    time: "20:00",
    studentDiscount: false,
    prize: 50,
    location: { lat: 55.941169, lng: -3.203705}
  },
  {
    pub: "Brass Monkey",
    address: "362 Leith Walk",
    day: "monday",
    time: "19:00",
    studentDiscount: true,
    prize: 50,
    location: { lat: 55.964030, lng: -3.177738}
  },
  // //tuesday quizzes
  {
    pub: "Akva",
    address: "129 Fountainbridge",
    day: "tuesday",
    time: "20:00",
    studentDiscount: true,
    prize: 30,
    location: { lat: 55.943236, lng: -3.208383}

  },
  {
    pub: "Apothecary",
    address: "No.8 Lister Square",
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
    address: "25 St. Leonard's St",
    day: "tuesday",
    time: "20:00",
    studentDiscount: false,
    prize: 30,
    location: { lat: 55.952344, lng: -3.199284}
  },
  {
    pub: "Bailise",
    address: "4 St Stephen St",
    day: "tuesday",
    time: "20:30",
    studentDiscount: false,
    prize: 30,
    location: { lat: 55.957531, lng: -3.207069}

  },
  {
    pub: "Barrel House",
    address: "35 Smokey Brae",
    day: "tuesday",
    time: "20:30",
    studentDiscount: false,
    prize: 30,
    location: { lat: 55.955138, lng: -3.149665}
  },
  {
    pub: "168 Rose St",
    address: "Rose Street",
    day: "tuesday",
    time: "20:00",
    studentDiscount: true,
    prize: 40,
    location: { lat: 55.951616, lng: -3.203661}
  },
  // //wednesday Quizzes
  {
    pub: "Antiquary",
    address: "78 St Stephen St",
    day: "wednesday",
    time: "20:30",
    studentDiscount: true,
    prize: 25,
    location: { lat: 55.957966, lng: -3.206151}
  },
  {
    pub: "Brass Monkey",
    address: "14 Drummond St",
    day: "wednesday",
    time: "21:00",
    studentDiscount: true,
    prize: 20,
    location: { lat: 55.947318, lng: -3.185262}
  },
  {
    pub: "Cabaret Voltaire",
    address: "38 Blair St, Edinburgh EH1 1QR",
    day: "wednesday",
    time: "21:00",
    studentDiscount: false,
    prize: 30,
    location: { lat: 55.948928, lng: -3.187260}
  },
  {
    pub: "Compass",
    address: "44 Queen Charlotte St",
    day: "wednesday",
    time: "20:00",
    studentDiscount: false,
    prize: 15,
    location: { lat: 55.973431, lng: -3.167784}
  },
  {
    pub: "Damm 27",
    address: "27 Causewayside",
    day: "wednesday",
    time: "21:00",
    studentDiscount: false,
    prize: 40,
    location: { lat: 55.938645, lng: -3.181502}
  },
  {
    pub: "Eastside",
    address: "51a George St",
    day: "wednesday",
    time: "19:00",
    studentDiscount: true,
    prize: 50,
    location: { lat: 55.953480, lng: -3.198924}
  },
  // //thursday Quizzes
  {
    pub: "Chanter",
    address: "32 Bread St",
    day: "thursday",
    time: "20:00",
    studentDiscount: true,
    prize: 50,
    location: { lat: 55.945765, lng: -3.203805}
  },
  {
    pub: "Footlights",
    address: "7 Spittal St, Edinburgh EH3 9DY",
    day: "thursday",
    time: "21:00",
    studentDiscount: true,
    prize: 100,
    location: { lat: 55.946124, lng: -3.203530}
  },
  {
    pub: "Hanging Bat",
    address: "133 Lothian Rd, Edinburgh EH3 9AB",
    day: "thursday",
    time: "18:00",
    studentDiscount: false,
    prize: 20,
    location: { lat: 55.945518, lng: -3.205157}
  },
  {
    pub: "CC Blooms",
    address: "24 Greenside Pl",
    day: "thursday",
    time: "20:00",
    studentDiscount: true,
    prize: 25,
    location: { lat: 55.957114, lng: -3.185177}
  },
  {
    pub: "Black Bull",
    address: "12 Grassmarket",
    day: "thursday",
    time: "19:00",
    studentDiscount: true,
    prize: 30,
    location: { lat: 55.954272, lng: -3.187330}
  },
  {
    pub: "The Abbey",
    address: "65 S Clerk St",
    day: "thursday",
    time: "21:00",
    studentDiscount: false,
    prize: 30,
    location: { lat: 55.939527, lng: -3.179607}
  },
  {
    pub: "Newsroom",
    address: "11 Leith St",
    day: "thursday",
    time: "21:00",
    studentDiscount: false,
    prize: 50,
    location: { lat: 55.953809, lng: -3.188237}
  },
  // // friday Quizzes
  {
    pub: "Black Bull",
    address: "43 Leith St",
    day: "friday",
    time: "19:30",
    studentDiscount: false,
    prize: 40,
    location: { lat: 55.947347, lng: -3.197362}
  },
  {
    pub: "The pond",
    address: "4 Bath Rd",
    day: "friday",
    time: "20:00",
    studentDiscount: false,
    prize: 30,
    location: { lat: 55.974584, lng: -3.160807}
  },
  {
    pub: "The Stable",
    address: "50 Mortonhall Gate",
    day: "friday",
    time: "20:30",
    studentDiscount: true,
    prize: 30,
    location: { lat: 55.903839, lng: -3.181332}
  },
  // // sunday Quizzes
  {
    pub: "The Artisan Bar",
    address: "36, London Rd, Edinburgh EH7 5BQ",
    day: "sunday",
    time: "21:00",
    studentDiscount: true,
    prize: 30,
    location: { lat: 55.957460, lng: -3.169408}
  },
  {
    pub: "Athletic Arms",
    address: "3 Angle Park Terrace",
    day: "sunday",
    time: "19:30",
    studentDiscount: false,
    prize: 30,
    location: { lat: 55.938991, lng: -3.223748}
  },
  {
    pub: "The Barologist",
    address: "23 Commercial St",
    day: "sunday",
    time: "21:00",
    studentDiscount: true,
    prize: 40,
    location: { lat: 55.976506, lng: -3.171481}
  },
  {
    pub: "Queens Arms",
    address: "49 Frederick St",
    day: "sunday",
    time: "20:00",
    studentDiscount: true,
    prize: 30,
    location: { lat: 55.953656, lng: -3.200546}
  },
  {
    pub: "Kings Wark",
    address: "36 Shore",
    day: "sunday",
    time: "18:00",
    studentDiscount: true,
    prize: 30,
    location: { lat: 55.976149, lng: -3.169546}
  },
  {
    pub: "Innis & Gunn",
    address: "83 Lothian Rd",
    day: "sunday",
    time: "19:00",
    studentDiscount: true,
    prize: 30,
    location: { lat: 55.946628, lng: -3.205517}
  }

]);
