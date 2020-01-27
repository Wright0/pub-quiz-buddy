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

  </div>
</template>

<script>
export default {
  name: 'pub-quiz-details',
  props: ["quizId", "quizzes"],
  computed: {
    selectedQuiz: function(){
      const quizSelected = this.quizzes.find(quiz => quiz._id === this.quizId);
      return quizSelected;
    }
  }
}
</script>

<style lang="css" scoped>

.details-box{
  margin: 20px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 400px;
}

</style>
