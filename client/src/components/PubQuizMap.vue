<template lang="html">
  <div>
    <div class="map-container">
      <pub-quiz-details :quizId="selectedPubId" :quizzes="quizzes" />
      <GmapMap
      :center="mapCenter"
      :zoom="13.5"
      map-type-id="roadmap"
      >

      <marker-pin v-for="(marker, index) in markers"
      :marker="marker"
      :index="index"/>
    </GmapMap>
  </div>

</div>

</template>


<script>

import SelectedQuizDetails from './SelectedQuizDetails.vue'
import MarkerPin from './MarkerPin.vue'
import { eventBus } from '../main.js'

export default {
  name: 'pub-quiz-map',
  props : ["quizzes", "selectedDay", "selectedDayQuizzes"],
  data() {
    return {
      mapCenter: { lat: 55.950790, lng: -3.195131 },
      selectedPubId: ""
    }
  },
  computed: {
    markers: function(){
      const markerList = [];

      const showMarkers = function(array){
        array.forEach(quiz => {
          const marker = {
            id: quiz._id,
            position: { lat: quiz.location.lat, lng: quiz.location.lng}
          }
          markerList.push(marker)
        })
      }

      if (this.selectedDay === "All Quizzes"){
        showMarkers(this.quizzes)
      } else if (this.selectedDayQuizzes) {
        showMarkers(this.selectedDayQuizzes)
      } else {
        showMarkers(this.quizzes)
      };

      return markerList;
    }
  },
  mounted(){
    eventBus.$on('close-info-window', () => {
      this.selectedPubId = null;
    })

    eventBus.$on('selected-day', () => {
      this.selectedPubId = null;
    })

    eventBus.$on('marker-clicked', id => {
      this.selectedPubId = id
    })
  },
  components: {
    'pub-quiz-details': SelectedQuizDetails,
    'marker-pin': MarkerPin
  }
};
</script>

<style lang="css" scoped>

div {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.vue-map-container{
  width:100%;
  height: 100vh;
}
</style>
