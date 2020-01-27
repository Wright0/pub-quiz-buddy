use quizBuddy;
db.dropDatabase();

db.pubQuizzes.insertMany([
//
//
// monday quizzes
  {
    pub: "Safari Lounge",
    address: "Easter Road",
    day: "monday",
    time: 1900,
    studentDiscount: true,
    prize: 100,
    location: { lat: 55.957235, lng: -3.167683}
  },
  {
    pub: "Amber Rose",
    address: "Castle Street",
    day: "tuesday",
    time: 1930,
    studentDiscount: true,
    prize: 30,
    location: { lat: 55.951940, lng: -3.202796}
  },
  {
    pub: "ARgyle Bar",
    address: "Argyle Place",
    day: "wednesday",
    time: 2100,
    studentDiscount: true,
    prize: 30,
    location: { lat: 55.938412, lng: -3.191309}
  },
  {
    pub: "Barony Bar",
    address: "Broughton Street",
    day: "thursday",
    time: 2130,
    studentDiscount: false,
    prize: 25,
    location: { lat: 55.958186, lng: -3.188618}
  },
  {
    pub: "Blackbird",
    address: "home Street",
    day: "friday",
    time: 2000,
    studentDiscount: false,
    prize: 50,
    location: { lat: 55.941169 , lng: -3.203705}
  }
  // {
  //   pub: "Bier Keller",
  //   address: "Picardy Place",
  //   day: "monday",
  //   time: 2000,
  //   studentDiscount: false,
  //   prize: 30
  // },
  // {
  //   pub: "Brass Monkey",
  //   address: "Leith Walk",
  //   day: "monday",
  //   time: 1900,
  //   studentDiscount: true,
  //   prize: 50
  // },
  // //
  // //
  // //tuesday quizzes
  // {
  //   pub: "Akva",
  //   address: "Fountainbridge",
  //   day: "tuesday",
  //   time: 2000,
  //   studentDiscount: true,
  //   prize: 30
  // },
  // {
  //   pub: "Apothecary",
  //   address: "Lister Square",
  //   day: "tuesday",
  //   time: 1900,
  //   studentDiscount: true,
  //   prize: 30
  // },
  // {
  //   pub: "Auld Hoose",
  //   address: "St Leonard Street",
  //   day: "tuesday",
  //   time: 2000,
  //   studentDiscount: false,
  //   prize: 30
  // },
  // {
  //   pub: "Auld Hundred",
  //   address: "Rose Street",
  //   day: "tuesday",
  //   time: 2000,
  //   studentDiscount: false,
  //   prize: 30
  // },
  // {
  //   pub: "Baile",
  //   address: "St Stephen Street",
  //   day: "tuesday",
  //   time: 2030,
  //   studentDiscount: false,
  //   prize: 30
  // },
  // {
  //   pub: "Barrel House",
  //   address: "Jocks Lodge",
  //   day: "tuesday",
  //   time: 2030,
  //   studentDiscount: false,
  //   prize: 30
  // },
  // {
  //   pub: "Black Cat",
  //   address: "Rose Street",
  //   day: "tuesday",
  //   time: 2000,
  //   studentDiscount: true,
  //   prize: 40
  // },
  // //
  // //
  // //wednesday Quizzes
  // {
  //   pub: "Antiquary",
  //   address: "St Stephen Street",
  //   day: "wednesday",
  //   time: 2030,
  //   studentDiscount: true,
  //   prize: 25
  // },
  // {
  //   pub: "Brandons of canonmill",
  //   address: "Canonmils",
  //   day: "tuesday",
  //   time: 2030,
  //   studentDiscount: true,
  //   prize: 50
  // },
  // {
  //   pub: "Brass Monkey",
  //   address: "Drummond Street",
  //   day: "tuesday",
  //   time: 2100,
  //   studentDiscount: true,
  //   prize: 20
  // },
  // {
  //   pub: "Cabaret Voltaire",
  //   address: "Blair Street",
  //   day: "tuesday",
  //   time: 2100,
  //   studentDiscount: false,
  //   prize: 30
  // },
  // {
  //   pub: "Compass",
  //   address: "Queen Charlotte Street",
  //   day: "tuesday",
  //   time: 2000,
  //   studentDiscount: false,
  //   prize: 15
  // },
  // {
  //   pub: "Damm",
  //   address: "Causewayside",
  //   day: "tuesday",
  //   time: 2100,
  //   studentDiscount: false,
  //   prize: 40
  // },
  // {
  //   pub: "Eastside",
  //   address: "George Street",
  //   day: "tuesday",
  //   time: 1900,
  //   studentDiscount: true,
  //   prize: 50
  // },
  // //
  // //
  // //thursday Quizzes
  // {
  //   pub: "Chanter",
  //   address: "Bread St",
  //   day: "thursday",
  //   time: 2000,
  //   studentDiscount: true,
  //   prize: 50
  // },
  // {
  //   pub: "Footlights",
  //   address: "Bread St",
  //   day: "thursday",
  //   time: 2100,
  //   studentDiscount: true,
  //   prize: 100
  // },
  // {
  //   pub: "Hanging Bat",
  //   address: "Lothian Road",
  //   day: "thursday",
  //   time: 1800,
  //   studentDiscount: false,
  //   prize: 20
  // },
  // {
  //   pub: "CC Blooms",
  //   address: "Greenside Place",
  //   day: "thursday",
  //   time: 2000,
  //   studentDiscount: true,
  //   prize: 25
  // },
  // {
  //   pub: "Black Bull",
  //   address: "Grassmarket",
  //   day: "thursday",
  //   time: 1900,
  //   studentDiscount: true,
  //   prize: 30
  // },
  // {
  //   pub: "The Abbey",
  //   address: "South Clerk Street",
  //   day: "thursday",
  //   time: 2100,
  //   studentDiscount: false,
  //   prize: 30
  // },
  // {
  //   pub: "Newsroom",
  //   address: "Leith Stret",
  //   day: "thursday",
  //   time: 2100,
  //   studentDiscount: false,
  //   prize: 50
  // },
  // //
  // //
  // // friday Quizzes
  // {
  //   pub: "Black Bull",
  //   address: "Grassmarket",
  //   day: "friday",
  //   time: 1930,
  //   studentDiscount: false,
  //   prize: 40
  // },
  // {
  //   pub: "The pond",
  //   address: "Bath Road",
  //   day: "friday",
  //   time: 2000,
  //   studentDiscount: false,
  //   prize: 30
  // },
  // {
  //   pub: "The Stable",
  //   address: "Morthonhall Gate",
  //   day: "friday",
  //   time: 2030,
  //   studentDiscount: true,
  //   prize: 30
  // },
  // //
  // //
  // // sunday Quizzes
  // {
  //   pub: "The Artisan Bar",
  //   address: "London Road",
  //   day: "sunday",
  //   time: 2100,
  //   studentDiscount: true,
  //   prize: 30
  // },
  // {
  //   pub: "Athletic Arms",
  //   address: "Angle Park Terrace",
  //   day: "sunday",
  //   time: 1930,
  //   studentDiscount: false,
  //   prize: 30
  // },
  // {
  //   pub: "The Barologist",
  //   address: "Commercial Street",
  //   day: "sunday",
  //   time: 2100,
  //   studentDiscount: true,
  //   prize: 40
  // },
  // {
  //   pub: "Queens Arms",
  //   address: "Frederick Street",
  //   day: "sunday",
  //   time: 2000,
  //   studentDiscount: true,
  //   prize: 30
  // },
  // {
  //   pub: "Kings Wark",
  //   address: "Shore",
  //   day: "sunday",
  //   time: 1800,
  //   studentDiscount: true,
  //   prize: 30
  // },
  // {
  //   pub: "Innis & Gunn",
  //   address: "Lothian Road",
  //   day: "sunday",
  //   time: 1900,
  //   studentDiscount: true,
  //   prize: 30
  // },
  // {
  //   pub: "Volunteers Arms",
  //   address: "East Main Street",
  //   day: "sunday",
  //   time: 2030,
  //   studentDiscount: false,
  //   prize: 30
  // }

]);
