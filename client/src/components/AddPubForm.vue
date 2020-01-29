<template lang="html">
  <form action="index.html" method="post">
    <div class="top-form-field form-field">
      <div class=""></div>
      <label for="">Name of Pub</label>
      <input type="text" name="" value="">
      <div class=""></div>
    </div>

    <div class="form-field">
      <div class=""></div>
      <label for="">Day of Quiz</label>
      <input type="text" name="" value="">
      <div class=""></div>
    </div>

    <div class="form-field">
      <div class=""></div>
      <label for="">Time of Quiz</label>
      <input type="text" name="" value="">
      <div class=""></div>
    </div>

    <div class="form-field">
      <div class=""></div>
      <label for="">Student Discount</label>
      <div class="">
        <input type="radio" name="gender" value="male">Yes<br>
        <input type="radio" name="gender" value="female">No<br>
      </div>
      <div class=""></div>
    </div>

    <div class="form-field">
      <div class=""></div>
      <label for="">Prize</label>
      <input type="text" name="" value="">
      <div class=""></div>
    </div>

  </form>

</template>

<script>
export default {
  name:'add-pub-form',
}
</script>

<style lang="css" scoped>


.add-pub-form, display-form {
    position: absolute;
    width: 100%;
    background-color: black;
    height: 700px;
    opacity: 0.7;
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

</style>
