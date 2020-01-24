<template>
  <div id="app">
    <h1>Quiz Buddy</h1>
    <days-filter />
    <pub-quiz-map />
  </div>
</template>

<script>
import DaysFilter from './components/DaysFilter.vue'
import PubQuizMap from './components/PubQuizMap.vue'

export default {
  name: 'app',
  components: {
    'days-filter': DaysFilter,
    'pub-quiz-map': PubQuizMap
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
