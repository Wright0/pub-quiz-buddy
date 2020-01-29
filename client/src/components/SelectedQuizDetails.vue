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

    <button @click="closeDetailWindow">close</button>
    <google-places />

  </div>
</template>

<script>

import { eventBus } from '../main.js'
import GooglePlaces from './GooglePlaces.vue'

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
  },
  components: {
    'google-places': GooglePlaces
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

</style>
