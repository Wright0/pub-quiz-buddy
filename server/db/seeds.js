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
  {
    pub: "The Church of Jesus Christ of Latter-day Saints",
    addrees: "spylaw road",
    dau: "sunday",
    time: "10:00",
    studentDiscount: false,
    prize: "jesus",
    location: {lat: 55.930680, lng: -3.222504}
  }
]);
