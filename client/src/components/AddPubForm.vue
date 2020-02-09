<template lang="html">
  <form action="index.html" v-on:submit="addPubQuiz" method="post">
    <div class="form">

      <label for="pub">Pub</label>
      <input ref="autocomplete"
      placeholder="Search"
      class="search-location"
      onfocus="value = ''"
      type="text"
      country="gb"
      />

      <label for="quiz">Day of Quiz</label>
      <select v-model="day">
        <option name="day" value="monday">Monday</option>
        <option name="day" value="tuesday">Tuesday</option>
        <option name="day" value="wednesday">Wednesday</option>
        <option name="day" value="thursday">Thursday</option>
        <option name="day" value="friday">Friday</option>
      </select>

      <label for="time">Time of Quiz</label>
      <input type="time" v-model="time" name="time"
      min="18:00" max="23:00" />

      <label for="">Student Discount</label>
      <div class="discount-radio-wrap">
        <input type="radio" v-model="studentDiscount" value="true">Yes</input>
        <input type="radio" v-model="studentDiscount" value="false">No</input>
      </div>

      <label for="prize">Prize</label>
      <input type="text" v-model="prize" name="prize">

      <input type="submit">

    </div>

  </form>

</template>

<script>
import PubQuizzesService from '../services/PubQuizzesService.js'
import { eventBus } from '../main'
import Places from 'vue-places';

export default {
  name:'add-pub-form',
  data() {
    return {
      pub: "",
      address: '',
      day: "",
      time: "",
      studentDiscount: null,
      prize: "",
      location: { lat: 0, lng: 0 }
    }
  },
  methods: {
    addPubQuiz(evt) {
      evt.preventDefault();

      const payload  = {
        pub: this.pub,
        address: this.address,
        day: this.day,
        time: this.time,
        studentDiscount: this.studentDiscount,
        prize: this.prize,
        location: { lat: this.location.lat, lng: this.location.lng }
      }

      PubQuizzesService.postPubQuiz(payload)
      .then( res => eventBus.$emit('pub-quiz-added', res))
    }
  },
  mounted() {
    this.autocomplete = new google.maps.places.Autocomplete(
      (this.$refs.autocomplete),
      {types: ['establishment']}
    );

    this.autocomplete.addListener('place_changed', () => {
      let place = this.autocomplete.getPlace();
      let pub = place.name
      let ac = place.address_components[0];
      let lat = place.geometry.location.lat();
      let lng = place.geometry.location.lng();

      this.address = place.formatted_address;
      this.location.lat = lat
      this.location.lng = lng
      this.pub = pub
    });

    const getAddressData = function (addressData, placeResultData, id) {
      this.address = placeResultData.address_components.formatted_address;
    }
  },
  components: {
    Places
  }
}
</script>

<style lang="css" scoped>

  .add-pub-form, display-form {
    position: absolute;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    height: 108vh;
    z-index: 1;
  }

  .form {
    margin-top: 8%;
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 3fr ;
    font-size: 1.3em;
  }

  label {
    margin: 8px 0;
    display: grid;
    grid-column: 2/3;
    color: white;
    align-self: center;
  }

  input {
    margin: 8px 0;
    display: grid;
    grid-column: 3/4;
    align-self: center;
    font-size: 0.9em;
  }

  select {
    align-self: center;
    font-size: 0.9em;
    cursor: select;
  }

  input[type="time"] {
    display: flex;
    flex-direction: row;
    font-size: 1em;
  }

  input[type="submit"]{
    background-color: #2b2b2b;
    color: #e2e2e2;
    border-radius: 5px;
    font-size: 0.8em;
    border: 1px solid #e2e2e2;
    cursor: pointer;
  }

  .discount-radio-wrap {
    display: flex;
    color: white;
    align-self: center;
  }

  .discount-radio-wrap div {
    width: 50%;
    text-align: left;
  }

  .discount-radio-wrap input[type="radio"] {
      margin: 0 10px;
  }

</style>
