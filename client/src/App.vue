<template>
  <div id="app">
    <h1>Quiz Buddy buddy</h1>
    <days-filter />
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
  }
  components: {
    'day-filter': DayFilter,
    'map': PubQuizMap
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
