<template lang="html">
  <li :value="day" @click="handleClick()">{{day}}</li>
  <!-- Something like this for class: :class="day === monday ? standard : active" -->
</template>

<script>
import { eventBus } from '../main.js'

export default {
  name: "day-filter-list-item",
  props: ["day"],
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

li:hover {
  background-color: green;
}

</style>
