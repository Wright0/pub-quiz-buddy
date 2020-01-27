<template lang="html">
  <div>
    <pub-quiz-details :quizId="selectedPubId" :quizzes="quizzes" />
    <div class="map-container">
      <GmapMap
      :center="center"
      :zoom="14"
      map-type-id="roadmap"
      style= "height: 100vh;"
      >

      <GmapMarker
      :key="index"
      v-for="(marker, index) in markers"
      :position="marker.position"
      :clickable="true"
      :draggable="false"
      @click="handleMarkerClick(marker.id)"
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
      selectedPubId: ""
    }
  },
  computed: {
    markers: function(){
      const markerList = [];

      this.selectedDayQuizzes.forEach(quiz => {
        const marker = {
          id: quiz._id,
          position: { lat: quiz.location.lat, lng: quiz.location.lng}
        }
        markerList.push(marker)
      })
      return markerList;
    }
  },
  props : ["quizzes", "selectedDay", "selectedDayQuizzes"],
  methods: {
    handleMarkerClick(id){
      this.selectedPubId = id
    }
  },
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
