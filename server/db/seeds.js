use quizBuddy;
db.dropDatabase();

db.pubQuizzes.insertMany([
  {
    pub: "Amber Rose",
    address: "Castle Street",
    day: "Monday",
    time: 1930,
    studentDiscount: true,
    prize: 30,
    position: { lat: 55.950790, lng: -3.193455 }
  },
  {
    pub: "Argyle Bar",
    address: "Argyle Place",
    day: "Monday",
    time: 2100,
    studentDiscount: true,
    prize: 30
  },
  {
    pub: "Barony Bar",
    address: "Broughton Street",
    day: "Monday",
    time: 2130,
    studentDiscount: false,
    prize: 25
  },
  {
    pub: "Bennets Bar",
    address: "Leven Street",
    day: "Monday",
    time: 2000,
    studentDiscount: false,
    prize: 50
  },
  {
    pub: "Bier Keller",
    address: "Picardy Place",
    day: "Monday",
    time: 2000,
    studentDiscount: false,
    prize: 30
  },
  {
    pub: "Brass Monkey",
    address: "Leith Walk",
    day: "Monday",
    time: 1900,
    studentDiscount: true,
    prize: 50
  },
  //Tuesday quizzes
  {
    pub: "Akva",
    address: "Fountainbridge",
    day: "Tuesday",
    time: 2000,
    studentDiscount: true,
    prize: 30
  },
  {
    pub: "Apothecary",
    address: "Lister Square",
    day: "Tuesday",
    time: 1900,
    studentDiscount: true,
    prize: 30
  },
  {
    pub: "Auld Hoose",
    address: "St Leonard Street",
    day: "Tuesday",
    time: 2000,
    studentDiscount: false,
    prize: 30
  },
  {
    pub: "Auld Hundred",
    address: "Rose Street",
    day: "Tuesday",
    time: 2000,
    studentDiscount: false,
    prize: 30
  },
  {
    pub: "Baile",
    address: "St Stephen Street",
    day: "Tuesday",
    time: 2030,
    studentDiscount: false,
    prize: 30
  },
  {
    pub: "Barrel House",
    address: "Jocks Lodge",
    day: "Tuesday",
    time: 2030,
    studentDiscount: false,
    prize: 30
  },
  {
    pub: "Black Cat",
    address: "Rose Street",
    day: "Tuesday",
    time: 2000,
    studentDiscount: true,
    prize: 40
  },
  //Wednesday Quizzes
  {
    pub: "Antiquary",
    address: "St Stephen Street",
    day: "Wednesday",
    time: 2030,
    studentDiscount: true,
    prize: 25
  },
  {
    pub: "Brandons of canonmill",
    address: "Canonmils",
    day: "Tuesday",
    time: 2030,
    studentDiscount: true,
    prize: 50
  },
  {
    pub: "Brass Monkey",
    address: "Drummond Street",
    day: "Tuesday",
    time: 2100,
    studentDiscount: true,
    prize: 20
  },
  {
    pub: "Cabaret Voltaire",
    address: "Blair Street",
    day: "Tuesday",
    time: 2100,
    studentDiscount: false,
    prize: 30
  },
  {
    pub: "Compass",
    address: "Queen Charlotte Street",
    day: "Tuesday",
    time: 2000,
    studentDiscount: false,
    prize: 15
  },
  {
    pub: "Damm",
    address: "Causewayside",
    day: "Tuesday",
    time: 2100,
    studentDiscount: false,
    prize: 40
  },
  {
    pub: "Eastside",
    address: "George Street",
    day: "Tuesday",
    time: 1900,
    studentDiscount: true,
    prize: 50
  },
  //Thursday Quizzes
  {
    pub: "Chanter",
    address: "Bread St",
    day: "Thursday",
    time: 2000,
    studentDiscount: true,
    prize: 50
  },
  {
    pub: "Footlights",
    address: "Bread St",
    day: "Thursday",
    time: 2100,
    studentDiscount: true,
    prize: 100
  },
  {
    pub: "Hanging Bat",
    address: "Lothian Road",
    day: "Thursday",
    time: 1800,
    studentDiscount: false,
    prize: 20
  },
  {
    pub: "CC Blooms",
    address: "Greenside Place",
    day: "Thursday",
    time: 2000,
    studentDiscount: true,
    prize: 25
  },
  {
    pub: "Black Bull",
    address: "Grassmarket",
    day: "Thursday",
    time: 1900,
    studentDiscount: true,
    prize: 30
  },
  {
    pub: "The Abbey",
    address: "South Clerk Street",
    day: "Thursday",
    time: 2100,
    studentDiscount: false,
    prize: 30
  },
  {
    pub: "Newsroom",
    address: "Leith Stret",
    day: "Thursday",
    time: 2100,
    studentDiscount: false,
    prize: 50
  },
  // Friday Quizzes
  {
    pub: "Black Bull",
    address: "Grassmarket",
    day: "Friday",
    time: 1930,
    studentDiscount: false,
    prize: 40
  },
  {
    pub: "The pond",
    address: "Bath Road",
    day: "Friday",
    time: 2000,
    studentDiscount: false,
    prize: 30
  },
  {
    pub: "The Stable",
    address: "Morthonhall Gate",
    day: "Friday",
    time: 2030,
    studentDiscount: true,
    prize: 30
  },
  //
  //
  // Sunday Quizzes
  {
    pub: "The Artisan Bar",
    address: "London Road",
    day: "Sunday",
    time: 2100,
    studentDiscount: true,
    prize: 30
  },
  {
    pub: "Athletic Arms",
    address: "Angle Park Terrace",
    day: "Sunday",
    time: 1930,
    studentDiscount: false,
    prize: 30
  },
  {
    pub: "The Barologist",
    address: "Commercial Street",
    day: "Sunday",
    time: 2100,
    studentDiscount: true,
    prize: 40
  },
  {
    pub: "Queens Arms",
    address: "Frederick Street",
    day: "Sunday",
    time: 2000,
    studentDiscount: true,
    prize: 30
  },
  {
    pub: "Kings Wark",
    address: "Shore",
    day: "Sunday",
    time: 1800,
    studentDiscount: true,
    prize: 30
  },
  {
    pub: "Innis & Gunn",
    address: "Lothian Road",
    day: "Sunday",
    time: 1900,
    studentDiscount: true,
    prize: 30
  },
  {
    pub: "Volunteers Arms",
    address: "East Main Street",
    day: "Sunday",
    time: 2030,
    studentDiscount: false,
    prize: 30
  }

]);
