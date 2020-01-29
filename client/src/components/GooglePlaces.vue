<template lang="html">
<div class="big">

  <h1>Hello Wlkjsadjkldsfjkldfkjlkndfskndsafnorld</h1>
  <VueGooglePlaces
  :api-key="placesKey"
  class="subheading"
  :enable-geolocation="true"
  types="(cities)"
  country="us"
  @placechanged="getAddressData"
>
  <MyInput
    icon="search"
    :value="value"
    :placeholder="$t('Your place')"
    ...
  />
</VueGooglePlaces>
</div>
</template>

<script>
// import VueGooglePlaces from 'vue-google-places'
//   // import { VuetifyGooglePlaces } from 'vue-google-places'
// Vue.use(VueGooglePlaces)

export default {
  name: 'google-places'
}
</script>

<style lang="css" scoped>
.big {
  height:50px;
  background-color: yellow;
}
</style>
