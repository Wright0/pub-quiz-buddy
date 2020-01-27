<template lang="html">
  <div class="details-box">
    <h1>{{ quizId }}</h1>
  </div>
</template>

<script>
export default {
  name: 'pub-quiz-details',
  props: ["quizId"]
}
</script>

<style lang="css" scoped>

.details-box{
  height: 100vh;
  width: 400px;
}

</style>
