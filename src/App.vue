<template>
  <v-app class="grey lighten-4" >
    <v-container fluid fill-height class="grey lighten-4">
      <v-row style="height:100%">
        <Navbar/>
        <v-main>
        <router-view/>
        </v-main>
      </v-row>
  </v-container>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Navbar from '@/components/Navbar.vue'

@Component({
  components: {
    Navbar
  }
})
export default class App extends Vue {}
</script>

<style>
body {
  height: 100%;
}
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
