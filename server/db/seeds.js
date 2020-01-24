use quizBuddy;
db.dropDatabase();

db.pubQuiz.insertMany([
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
    prize: 2000
  },
  {
    pub: "Safari Lounge",
    address: "Easter Road",
    day: "Monday",
    time: 1900,
    studentDiscount: true,
    prize: 100
  }
]);
