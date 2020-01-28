<template lang="html">
  <GmapMarker
  :key="index"
  :clickable="true"
  :draggable="false"
  :animation="0"
  :position="marker.position"
  @click="handleMarkerClick(marker.id)"
  @mouseover="bounceOnHover"
  @mouseout="mouseOffMarker"
  />
</template>

<script>

import { eventBus } from '../main.js'

export default {
  name: 'marker-pin',
  methods: {
    bounceOnHover(){
      console.log(this.marker);
      // this.marker.animation.setAnimation(google.maps.Animation.BOUNCE)
    },
    mouseOffMarker(e){
      console.log(e);
    },
    handleMarkerClick(id){
      eventBus.$emit('marker-clicked', id)

    }
  },
  props: ['marker', 'index']
}
</script>

<style lang="css" scoped>
</style>
