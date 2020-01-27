<template>
  <div id="app">
    <day-filter />
    <pub-quiz-map/>

  </div>
</template>

<script>
import DayFilter from './components/DayFilter.vue'
import PubQuizMap from './components/PubQuizMap.vue'

export default {
  name: 'app',
  data(){
    return {
      quizzes: [],//result of a fetch - will have the DB seeds. Mounted?,
      selectedDay: "" //will populate with an event bus from DayFilter
    }
  },
  components: {
    'day-filter': DayFilter,
    'pub-quiz-map': PubQuizMap
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
</style>
