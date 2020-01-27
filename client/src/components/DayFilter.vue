<template>
  <nav class="cont">
    <h1>PUB QUIZ BUDDY</h1>
    <p>slogan can go here</p>


  </nav>
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
.cont {
  width: 100%;
  background: black;
  /* z-index: 1; */
  color: white;
  text-align:center;
}

h1 {
  margin: 0;
}

p {
  margin: 0;
  padding-bottom: 5px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.7em;
}

</style>
