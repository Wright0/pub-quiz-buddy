<template lang="html">
  <form action="index.html" v-on:submit="addPubQuiz" method="post">
    <div class="top-form-field form-field">
      <div class=""></div>
      <label for="pub">Name of Pub</label>
      <input type="text" v-model="pub" name="pub">
      <div class=""></div>
    </div>

    <div class="form-field">
      <div class=""></div>
      <label for="pub">Address</label>
      <input ref="autocomplete"
         placeholder="Search"
         class="search-location"
         onfocus="value = ''"
         type="text" />
      <div class=""></div>
    </div>

  <div class="form-field">
    <div class=""></div>
    <label for="quiz">Day of Quiz</label>
    <select v-model="day">
      <option name="day" value="monday">Monday</option>
      <option name="day" value="tuesday">Tuesday</option>
      <option name="day" value="wednesday">Wednesday</option>
      <option name="day" value="thursday">Thursday</option>
      <option name="day" value="friday">Friday</option>
    </select>
    <div class=""></div>
  </div>

  <div class="form-field">
    <div class=""></div>
    <label for="time">Time of Quiz</label>
    <input type="time" v-model="time" name="time"
       min="18:00" max="23:00" />
    <div class=""></div>
  </div>

  <div class="form-field">
    <div class=""></div>
    <label for="">Student Discount</label>
    <div class="discount-radio-wrap">
      <div><input type="radio" v-model="studentDiscount" value="true">Yes</input></div>
      <div><input type="radio" v-model="studentDiscount" value="false">No</input></div>
    </div>
    <div class=""></div>
  </div>

  <div class="form-field">
    <div class=""></div>
    <label for="prize">Prize</label>
    <input type="text" v-model="prize" name="prize">
    <div class=""></div>
  </div>

  <div class="form-field">
    <div class=""></div>
    <div class=""></div>
    <input type="submit">
    <div class=""></div>
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
  mounted() {
    this.autocomplete = new google.maps.places.Autocomplete(
      (this.$refs.autocomplete),
      {types: ['geocode']}
    );
    this.autocomplete.addListener('place_changed', () => {
    let place = this.autocomplete.getPlace();
    let ac = place.address_components[0];
    let lat = place.geometry.location.lat();
    let lng = place.geometry.location.lng();

    this.address = place.formatted_address;
    this.location.lat = lat
    this.location.lng = lng

});
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
      .then( res => { eventBus.$emit('pub-quiz-added', res);
    })
  },
  getAddressData: function (addressData, placeResultData, id) {
    console.log(placeResultData);
    this.address = placeResultData.address_components.formatted_address;
  }
},
components: {
   Places,
},
}
</script>

<style lang="css" scoped>


.add-pub-form, display-form {
  position: absolute;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  height: 700px;
  z-index: 1;
}

.form-field {
  display: grid;
  grid-template-columns: 31% 20% 18% 31%;
  margin-top: 10px;
}
.top-form-field {
  margin-top: 200px;
}

input[type="time"] {
    width: 28%;
}

.discount-radio-wrap {
  display: flex;
}

.discount-radio-wrap div {
  width: 50%;
  text-align: left;
}

.discount-radio-wrap input[type="radio"] {
    margin: 0 10px;
}

</style>
