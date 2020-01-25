
<template lang="html">
  <div class="">
    <p>This is our map</p>

    <GmapMap
    :center="center"
    :zoom="12"
    map-type-id="roadmap"
    style="width: 600px; height: 400px"
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
        markers: [
          {id: 74832798432,
          position: { lat: 55.950790, lng: -3.195131 }},
          {id: 7483274832,
          position: { lat: 55.952684, lng: -3.193455 }}
        ],
        places: []
      };
    }
  };

</script>

<style lang="css" scoped>
</style>
