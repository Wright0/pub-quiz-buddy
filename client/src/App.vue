<template>
  <div id="app">
    <nav class="cont">
      <add-pub-form v-if="showModal" class="add-pub-form" />
      <!-- SHould I pass the v-if down as a prop or the I thing here? -->
      <i v-if="showModal" @click="hideForm">&#215;</i>
      <h1><a class="logo-link" href="http://localhost:8080/">PUB QUIZ BUDDY</a></h1>
      <p>"I would totally use this"</p>
      <button class="add-quiz" @click="displayForm">Add Pub Quiz</button>
    </nav>
    <day-filter/>
    <pub-quiz-map :selectedDay="selectedDay" :quizzes="quizzes" :selectedDayQuizzes="selectedDayQuizzes"/>
  </div>
</template>

<script>
import { eventBus } from './main.js'
import PubQuizzesService from './services/PubQuizzesService.js'
import DayFilter from './components/DayFilter.vue'
import PubQuizMap from './components/PubQuizMap.vue'
import AddPubForm from './components/AddPubForm'

export default {
  name: 'app',
  data(){
    return {
      quizzes: [], //result of a fetch
      selectedDay: "", //passed up from DayFilterListItem
      selectedDayQuizzes: null,
      showModal: false // If this is true then the component displays??
    }
  },
  components: {
    'day-filter': DayFilter,
    'pub-quiz-map': PubQuizMap,
    'add-pub-form': AddPubForm
  },
  methods: {
    fetchQuizzes(){
      PubQuizzesService.getQuizzes()
      .then(fetchedQuizzes => this.quizzes = fetchedQuizzes)
    },
    displayForm(event){
       this.showModal = true;
    },
    hideForm(event) {
      this.showModal = false;
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

nav > h1 {
  margin-top: 0;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Quattrocento', serif;
  font-family: 'Oswald', sans-serif;
  background-color: white;
}

.cont {
  width: 100%;
  background: black;
  /* z-index: 1; */
  color: white;
  text-align:center;
  position: relative;
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

button.add-quiz {
    float: right;
    position: relative;
    top: -52px;
    background-color: black;
    left: -67px;
    padding: 8px;
    border-radius: 10px;
    color: white;
    font-weight: 400;
    font-size: 14px;
}

i {
  color: red;
  top: 10px;
  right: 10px;
  font-size: 80px;
  position: fixed;
  cursor: pointer;
  line-height: 16px;
  z-index: 5;
}

.logo-link{
  text-decoration: none;
  color: white;
}


</style>
