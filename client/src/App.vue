<template>
  <div id="app">
    <nav class="cont">
      <h1>PUB QUIZ BUDDY</h1>
      <p>slogan can go here</p>
    </nav>
    <day-filter/>
    <pub-quiz-map :selectedDay="selectedDay" :quizzes="quizzes"/>

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
      quizzes: [],//result of a fetch - will have the DB seeds. Mounted?,
      selectedDay: "", //will populate with an event bus from DayFilter
    }
  },
  components: {
    'day-filter': DayFilter,
    'pub-quiz-map': PubQuizMap
  },
  mounted(){
    this.fetchQuizzes()

    eventBus.$on('selected-day', dayClicked => this.selectedDay = dayClicked)
  },
  methods: {
    fetchQuizzes(){
      PubQuizzesService.getQuizzes()
      .then(fetchedQuizzes => this.quizzes = fetchedQuizzes)
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Oswald|Quattrocento&display=swap');


body {
  margin: 0;
  padding: 0;
  font-family: 'Quattrocento', serif;
font-family: 'Oswald', sans-serif;
}
#app {

}

.cont {
  width: 100%;
  background: black;
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
}
</style>
