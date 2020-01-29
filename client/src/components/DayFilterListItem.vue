<template lang="html">
  <li class='nav-item' :style='{
    "text-decoration" : (isSelectedProp ? "underline" : "none" ),
    "color" : (isSelectedProp ? "#f12e12" : "#e2e2e2" )}'
    :value="day" @click="handleClick()">{{day}}</li>

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

  li:hover {
    font-style: italic;
  }

</style>
