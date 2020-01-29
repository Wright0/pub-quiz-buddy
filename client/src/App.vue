<template>
  <div id="app">
    <nav class="cont">
      <h1><a class="logo-link" href="http://localhost:8080/">PUB QUIZ BUDDY</a></h1>
      <p>"I would totally use this"</p>
    </nav>
    <day-filter/>
    <!-- <additional-filters> -->
    <pub-quiz-map :selectedDay="selectedDay" :quizzes="quizzes" :selectedDayQuizzes="selectedDayQuizzes"/>
  </div>
</template>

<script>
import { eventBus } from './main.js'
import PubQuizzesService from './services/PubQuizzesService.js'
import DayFilter from './components/DayFilter.vue'
import PubQuizMap from './components/PubQuizMap.vue'

export default {
  name: 'app',
  data(){
    return {
      quizzes: [], //result of a fetch
      selectedDay: "", //passed up from DayFilterListItem
      selectedDayQuizzes: null
    }
  },
  components: {
    'day-filter': DayFilter,
    'pub-quiz-map': PubQuizMap
  },
  methods: {
    fetchQuizzes(){
      PubQuizzesService.getQuizzes()
      .then(fetchedQuizzes => this.quizzes = fetchedQuizzes)
    }
  },
  mounted(){
    this.fetchQuizzes()

    eventBus.$on('selected-day', stringOfDayClicked => {
      this.selectedDay = stringOfDayClicked;

      PubQuizzesService.getQuizzesByDay(this.selectedDay)
      .then(fetchedQuizzes => this.selectedDayQuizzes = fetchedQuizzes)
    })
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Oswald|Quattrocento&display=swap');

body {
  margin: 0;
  padding: 0;
  font-family: 'Quattrocento', serif;
  font-family: 'Oswald', sans-serif;
  background-color: white;
}

.cont {
  width: 100%;
  background: #111111;
  /* z-index: 1; */
  color: white;
  text-align:center;
}

h1 {
  margin: 0;
  font-size: 2em;
}

p {
  margin: 0;
  padding-bottom: 5px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 1em;
  color: #e2e2e2

}

.logo-link{
  text-decoration: none;
  color: #e2e2e2
}
</style>
