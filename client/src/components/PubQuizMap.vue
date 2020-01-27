<template lang="html">
  <div>
  <pub-quiz-details/>
  <div class="map-container">
    <GmapMap
    :center="center"
    :zoom="12"
    map-type-id="roadmap"
    style= "height: 100vh;"
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
</div>

</template>


<script>

import SelectedQuizDetails from './SelectedQuizDetails.vue'

export default {
  name: 'pub-quiz-map',
  data() {
    return {
      center: { lat: 55.950790, lng: -3.195131 },
      selectedPubId: "", //Set on @click of a marker,
      }
    },
    computed: {
      markers(){
        const markerList = [
          {id: 74832798,
            position: { lat: 55.950790, lng: -3.195131 }
          },
          {id: 74832798,
            position: { lat: 55.950790, lng: -3.193455 }
          }
        ]
        return markerList;
      }
    },
    props : ["quizzes", "selectedDay"],
    components: {
      'pub-quiz-details': SelectedQuizDetails
    }
  };

</script>

<style lang="css" scoped>

div {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.map-container{
  width:100%;
}
</style>
