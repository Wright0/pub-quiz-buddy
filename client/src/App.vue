<template>
  <div id="app">
    <nav class="cont">

      <h1><a class="logo-link" href="http://localhost:8080/">PUB QUIZ BUDDY</a></h1>
      <p>A quiz for every day of the week - if your week only has 5 days</p>

      <button class="add-quiz" @click="displayForm">Add Pub Quiz</button>
    </nav>

    <add-pub-form v-if="showModal" class="add-pub-form" />
    <i v-if="showModal" @click="hideForm">&#215;</i>

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
      quizzes: [],
      selectedDay: "",
      selectedDayQuizzes: null,
      showModal: false
    }
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

    eventBus.$on('pub-quiz-added', newQuiz => {
      this.showModal = false;
      this.quizzes.push(newQuiz);
      this.selectedDay = newQuiz.day

      this.fetchQuizzes();

      PubQuizzesService.getQuizzesByDay(newQuiz.day)
      .then(fetchedQuizzes => this.selectedDayQuizzes = fetchedQuizzes)
    })

  },
  components: {
    'day-filter': DayFilter,
    'pub-quiz-map': PubQuizMap,
    'add-pub-form': AddPubForm
  }
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
    padding: 2% 0;
    background: #111111;
    /* z-index: 1; */
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
    color: #e2e2e2

  }

  button.add-quiz {
    float: right;
    position: relative;
    top: -62px;
    background-color: black;
    left: -67px;
    padding: 8px 19px;
    border-radius: 10px;
    color: white;
    font-weight: 400;
    font-size: 1.2em;
    font-family: inherit;
    cursor: pointer;
  }

  i {
    color: red;
    right: 20px;
    font-size: 100px;
    position: fixed;
    margin-right: 400px;
    cursor: pointer;
    line-height: 16px;
    z-index: 5;
  }

  .logo-link{
    text-decoration: none;
    color: #e2e2e2
  }

  .logo-link:hover{
    color: #F05A4E;
  }

</style>
