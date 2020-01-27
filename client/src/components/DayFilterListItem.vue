<template lang="html">
  <li :value="day" @click="handleClick()">{{day}}</li>
</template>

<script>

export default {
  name: "day-filter-list-item",
  data(){
    return {
      selectedDay: ""
    }
  },
  props: ["day"],
  methods: {
    handleClick(){
      this.selectedDay = this.day
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
</style>
