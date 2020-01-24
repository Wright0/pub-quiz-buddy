<template lang="html">
  <div class="">
    <p>his is our map</p>

    <GmapMap
    :center="{lat:10, lng:10}"
    :zoom="7"
    map-type-id="terrain"
    style="width: 500px; height: 300px"
    >
  <GmapMarker
    :key="index"
    v-for="(m, index) in markers"
    :position="m.position"
    :clickable="true"
    :draggable="true"
    @click="center=m.position"
  />
</GmapMap>

  </div>

</template>


<script>

export default {
  name: 'pub-quiz-map',
  props: ['markers']

}

</script>

<style lang="css" scoped>
</style>
