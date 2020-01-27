<template lang="html">
  <div class="map-container">
    <GmapMap
    :center="center"
    :zoom="12"
    map-type-id="roadmap"
    style= "height: 100vh"
    >

    <GmapMarker
    :key="index"
    v-for="(marker, index) in markers"
    :position="marker.position"
    :clickable="true"
    :draggable="false"
    @click="action"
    />
  </GmapMap>

</div>

</template>


<script>

export default {
  name: 'pub-quiz-map',
  data() {
      return {
        center: { lat: 55.950790, lng: -3.195131 },
        selectedPubId: "" //Set on @click of a marker
      }
    },
    computed: {
      markers(){
        // do some stuff.
        // Make it look like this:
        // {id: 74832798,
        // position: { lat: 55.950790, lng: -3.195131 }},
        // {id: 7483274832,
        // position: { lat: 55.952684, lng: -3.193455 }}
      },
      selectedPubQuiz(selectedPubId){
        // created by finding matching id (quiz._id and the id being passed in (selected Pub ID))
      }
    },
    props : ["Quizzes", "SelectedDay"]
  };

</script>

<style lang="css" scoped>
</style>
