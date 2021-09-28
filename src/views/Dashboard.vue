<template>
 <div class="dashboard" style="height:100%">
    <v-subheader class="grey--text">Dashboard</v-subheader>
      <v-container fill-height class="my-5 mx-4" style="align-content: flex-start">
        <v-row wrap no-gutters>
          <v-col cols="12" md="6">
            <v-btn outlined block color="primary" >1</v-btn>
          </v-col>
          <v-col cols="4" md="2">
            <v-btn outlined block color="primary" >3</v-btn>
          </v-col>
          <v-col cols="4" md="2">
            <v-btn outlined block color="primary" >4</v-btn>
          </v-col>
          <v-col cols="4" md="2">
            <v-btn outlined block color="primary" >5</v-btn>
          </v-col>
        </v-row>

        <v-row  wrap no-gutters justify="space-around" class="mt-4">
          <v-col cols="4" md="3">
            <v-btn outlined block color="success">1</v-btn>
          </v-col>
          <v-col cols="4" md="3">
            <v-btn outlined block color="success">2</v-btn>
          </v-col>
        </v-row>
      </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Dashboard',

  components: {
  }
})
</script>
