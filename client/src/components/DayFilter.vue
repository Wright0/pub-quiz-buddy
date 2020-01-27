<template>
  <nav class="days-nav">
    <ul>
      <day-filter-list-item v-for="day in daysOfTheWeek" :day="day"/>
    </ul>
  </nav>
</template>

<script>

import DayFilterListItem from './DayFilterListItem.vue'

export default {
  name: 'days-filter',
  data(){
    return {
      daysOfTheWeek: ["All Quizzes", "monday", "tuesday", "wednesday", "thursday", "friday"]
    }
  },
  components: {
    'day-filter-list-item': DayFilterListItem
  }
}
</script>


<style scoped>
.days-nav {
  width: 100%;
  background: grey;
  /* z-index: 1; */
  color: black;
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
