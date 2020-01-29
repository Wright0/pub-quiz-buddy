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
  components: {
    'day-filter-list-item': DayFilterListItem
  },
  mounted() {
  eventBus.$on('selected-day', selectedDay => {
    this.selectedDay = selectedDay
  })
  }
}
</script>


<style scoped>
.days-nav {
  width: 100%;
  background:#e1e1e1;
  /* z-index: 1; */
  color: #1e1e1e;
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
