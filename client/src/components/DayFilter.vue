<template>
  <nav class="days-nav">
    <ul>
      <day-filter-list-item v-for="day in daysOfTheWeek" :day="day" :isSelectedProp="selectedDay === day" />
    </ul>
  </nav>
</template>

<script>

import { eventBus } from '../main.js'
import DayFilterListItem from './DayFilterListItem.vue'

export default {
  name: 'days-filter',
  data(){
    return {
      daysOfTheWeek: ["All Quizzes", "monday", "tuesday", "wednesday", "thursday", "friday"],
      selectedDay: null
    }
  },
  mounted() {
    eventBus.$on('selected-day', selectedDay => {
      this.selectedDay = selectedDay
    })

    eventBus.$on('pub-quiz-added', newQuiz => this.selectedDay = newQuiz.day)
  },
  components: {
    'day-filter-list-item': DayFilterListItem
  }
}
</script>


<style scoped>
  .days-nav {
    width: 100%;
    background:#2b2b2b;
    padding: 0.75% 0;
    /* z-index: 1; */
    /* color: #e2e2e2; */
  }

  ul {
    margin: 0px auto;
    padding: 0px;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

</style>
