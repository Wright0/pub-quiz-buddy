<template lang="html">
  <li class='nav-item' :style='{
    "text-decoration" : (isSelectedProp ? "underline" : "none" ),
    "color" : (isSelectedProp ? "#2b2b2b" : "#666666" )}'
  :value="day" @click="handleClick()">{{day}}</li>
  <!-- Something like this for class: :class="day === monday ? standard : active" -->
</template>

<script>
import { eventBus } from '../main.js'

export default {
  name: "day-filter-list-item",
  props: ["day", "isSelectedProp"],
  methods: {
    handleClick(){
      eventBus.$emit('selected-day', this.day);
      }
    }
  }
</script>

<style lang="css" scoped>

li {
  margin: 0px 20px;
  padding-bottom: 5px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 1.3em;
  cursor: pointer;
}

.nav-item:hover {
  color: #2b2b2b;
}

</style>
