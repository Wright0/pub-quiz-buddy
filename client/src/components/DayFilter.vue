<template>
  <nav class="days-nav">
    <ul>
      <li v-for="day in daysOfTheWeek" v-model="selectedDay" @click="sendSelectedDay">{{day}}</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'days-filter',
  data(){
    return {
      selectedDay: "",
      daysOfTheWeek: ["All Quizzes", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    }
  },
  methods: {
    sendSelectedDay(){
      eventBus.$emit('selected-day', day);

    }
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

li {
  margin: 0px 20px;
  padding-bottom: 5px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 1.3em;
  cursor: pointer;
}

</style>
