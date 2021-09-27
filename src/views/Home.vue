<template>
 <div class="home">
    <h1>Homepage</h1>

    <!-- <v-btn class="hidden-md-and-down">click me</v-btn> -->

    <!-- <v-btn class="hidden-md-and-up">click me</v-btn> -->

    <v-btn class="hidden-sm-only">click me</v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Home',

  components: {
  }
})
</script>
