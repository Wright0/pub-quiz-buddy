<template>
  <div >
    <div >
      This is our days filter right now...
    </div>


  </div>
</template>

<script>
export default {
  name: 'days-filter',
  data(){
    return {
      selectedDay: "" // Is the result of clicking a day. Send it to App through an event bus at some point.
    }
  }
}
</script>


<style scoped>

</style>
