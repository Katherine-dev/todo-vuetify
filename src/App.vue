<template>
  <v-app class="grey lighten-4" >
    <v-container fluid fill-height class="grey lighten-4">
      <v-row style="height: 100%">
        <Navbar/>
        <v-main class="mb-4">
        <router-view/>
        </v-main>
      </v-row>
  </v-container>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '@/components/Navbar.vue'

export default Vue.extend({
  name: 'App',
  components: {
    Navbar
  },
  data: () => ({
    //
  })
})
</script>

<style>
html {
  overflow: hidden !important;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

html::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>
