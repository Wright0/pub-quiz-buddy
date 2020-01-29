<template lang="html">
  <div v-if="quizId" class="details-box">
    <h1>{{ selectedQuiz.pub }}</h1>
    <dl>
      <dt>Address:</dt>
      <dd>{{ selectedQuiz.address }}</dd>
      <dt>Prize:</dt>
      <dd>{{ selectedQuiz.prize }}</dd>
      <dt>Time:</dt>
      <dd>{{ selectedQuiz.time }}</dd>
    </dl>
    <button class="close-button" @click="closeDetailWindow">CLOSE <i class="fas fa-times"></i></button>

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

.details-box {
  margin: 20px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 400px;
}

.close-button {
  width: 100px;
  height: 30px;
  background: #dd270d;
  color: white;
cursor: pointer;
margin: 0 auto;
}

.close-button:focus{
  outline: none;
}

.close-button:hover {
  background: #f12e12;
}



</style>
