<template lang="html">
    <GmapMarker
      ref="marker"
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
      this.$refs.marker.$markerObject.setAnimation("1")
    },
    mouseOffMarker(){
      this.$refs.marker.$markerObject.setAnimation("0")
    },
    handleMarkerClick(id){
      eventBus.$emit('marker-clicked', id);
      // this.$refs.marker.$markerObject.setAnimation("0")
    }
  },
  props: ['marker', 'index']
}
</script>

<style lang="css" scoped>
</style>
