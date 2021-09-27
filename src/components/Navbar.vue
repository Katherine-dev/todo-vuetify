<template>
  <nav>
    <v-toolbar flat app>

      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Vuetify</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text color="grey">
        <span>Sign Out</span>
        <v-icon right>mdi-login-variant</v-icon>
      </v-btn>

    </v-toolbar>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

})
</script>
