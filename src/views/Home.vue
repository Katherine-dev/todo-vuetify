<template>
 <div class="home">
    <h1>Homepage</h1>
    <v-btn class="pink white--text mx-2">click me</v-btn>
    <v-btn depressed dark color="pink" class="mr-2">click me</v-btn>
    <v-btn text color="pink">click me</v-btn>

    <v-btn depressed class="pink white--text mr-2">
      <v-icon left>mdi-email</v-icon>
      <span>email me</span>
    </v-btn>

    <v-btn depressed small class="pink white--text mr-2">
      <v-icon left small>mdi-email</v-icon>
      <span>email me</span>
    </v-btn>

    <v-btn depressed large class="pink white--text mr-2">
      <span>email me</span>
      <v-icon right large >mdi-email</v-icon>
    </v-btn>

    <v-btn fab depressed small dark color="purple">
      <v-icon small>mdi-heart</v-icon>
    </v-btn>
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
