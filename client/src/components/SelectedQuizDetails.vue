<template lang="html">
  <div v-if="quizId" class="details-box">
    <div id="pub-info-container">
      <h1>{{ selectedQuiz.pub }}</h1>
      <p>{{selectedQuiz.day}}</p>
      <div class="details-inner-container">
        <h2>Address:</h2>
        <p>{{ selectedQuiz.address }}</p>
      </div>
      <div class="details-inner-container">
        <h2>Time:</h2>
        <p>{{ selectedQuiz.time }}</p>
      </div>
      <button class="close-button" @click="closeDetailWindow">CLOSE</button>
    </div>
  </div>
</template>

<script>

import { eventBus } from '../main.js'

export default {
  name: 'pub-quiz-details',
  props: ["quizId", "quizzes"],
  computed: {
    selectedQuiz: function(){
      const quizSelected = this.quizzes.find(quiz => quiz._id === this.quizId);
      return quizSelected;
    }
  },
  methods: {
    closeDetailWindow(){
      eventBus.$emit('close-info-window');
    }
  }
}
</script>

<style lang="css" scoped>

  h1, h2 {
    text-align: center;
    color: #2b2b2b;
  }

  h2 {
    margin-bottom: 0;
  }

  p {
    font-size: 18px;
    color: #2b2b2b;
    margin: auto;
    padding: 0;
    text-align:  center;
    font-weight: bold;
    letter-spacing: 0;
  }

  .details-box {
    padding: 20px;
    display: flex;
    flex-direction: column;
    width: 300px;
    background: #f3f3f3;
  }

  .close-button {
    width: 100px;
    height: 30px;
    background: #dd270d;
    color: white;
    cursor: pointer;
    margin: 40px auto;
  }

  .close-button:focus{
    outline: none;
  }

  .close-button:hover {
    background: #f12e12;
  }

  #pub-info-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .details-inner-container {
    display: flex;
    flex-direction: column;
    height:80px;
  }

</style>
