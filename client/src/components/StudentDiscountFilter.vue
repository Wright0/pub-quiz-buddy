<template lang="html">
    <input type="checkbox" >
</template>

<script>
import { eventBus } from "@/main"
import PubQuizzesService from "@/services/PubQuizzesService";

export default {
  name: 'student-discount-filter',
  props: ['quizzes']
}

</script>
<style lang="css" scoped>
</style>
