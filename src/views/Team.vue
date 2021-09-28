<template>
 <div class="team" style="height:100%; overflow-y:scroll; -webkit-overflow-scrolling: touch;overflow-y: scroll;">
    <v-subheader class="grey--text">Team</v-subheader>

    <v-container fill-height class="my-5" style="align-items: flex-start">
        <v-row no-gutters>
          <v-col  cols=12 md=4 lg=3 v-for="person in team" :key="person.name">
            <v-card flat class="text-center ma-3">
              <v-responsive class="pt-4">
                <v-avatar size="100" class="grey lighten-2">
                  <img :src="person.avatar">
                </v-avatar>
              </v-responsive>
              <v-card-text>
                <div class="card-subheading">
                  {{ person.name }}
                </div>
                <div class="grey--text">
                  {{ person.role }}
                </div>
              </v-card-text>
              <v-btn text color="grey">
                <v-icon small left>
                  mdi-message
                </v-icon>
                <span>
                  message
                </span>
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
    </v-container>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Team',

  data () {
    return {
      team: [
        { name: 'Nionoku', role: 'Software engineer', avatar: '/avatar-1.jpg' },
        { name: 'Katherine-dev', role: 'Web developer', avatar: '/avatar-2.jpg' },
        { name: 'Chun Li', role: 'Graphic designer', avatar: '/avatar-3.png' },
        { name: 'Gouken', role: 'Social media maverick', avatar: '/avatar-4.png' },
        { name: 'Yoshi', role: 'Sales guru', avatar: '/avatar-5.png' }
      ]
    }
  }
})
</script>
