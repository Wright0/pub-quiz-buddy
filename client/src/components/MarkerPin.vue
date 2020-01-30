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
  props: ['marker', 'index'],
  data(){
    return {
      active: false
    }
  },
  methods: {
    bounceOnHover(){
      this.$refs.marker.$markerObject.setAnimation("1");
    },
    mouseOffMarker(){
      if (this.active) return;
      this.$refs.marker.$markerObject.setAnimation("0");
    },
    handleMarkerClick(id){
      this.active = true;
      eventBus.$emit('marker-clicked', id);
      this.$refs.marker.$markerObject.setAnimation("1");
    },
    stopBounce(id){
      if (this.marker.id === id) return;
      this.active = false;
      if (this.$refs.marker) {
        this.$refs.marker.$markerObject.setAnimation("0")
      }
    }
  },
  mounted(){
    eventBus.$on('marker-clicked', this.stopBounce);
    eventBus.$on('selected-day', this.stopBounce);
    eventBus.$on('close-info-window', this.stopBounce);
  }
}
</script>

<style lang="css" scoped>
</style>
