<template>
  <nav>
    <v-app-bar flat app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Vuetify</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

        <v-menu offset-y>
          <template v-slot:activator="{on}">
            <v-btn text color="grey" v-on="on">
              <v-icon left>
                mdi-chevron-down
              </v-icon>
              Menu
            </v-btn>
          </template>
            <v-list>
              <v-list-item
              v-for="link in links"
              :key="link.text" router
              :to="link.route">
              <v-list-item-title class="primary--text">
                {{link.text}}
              </v-list-item-title>
              </v-list-item>
            </v-list>
        </v-menu>

      <v-btn text color="grey">
        <span>Sign Out</span>
        <v-icon right>mdi-login-variant</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app class="primary">
      <v-row justify="center" class="mt-5">
        <v-col cols="6">
          <v-avatar size="100">
            <img src="/avatar-2.jpg" />
          </v-avatar>
          <p class="white--text text-subtitle-1 mt-1">
            Katherine-dev
          </p>
        </v-col>
        <v-col align="center" class="mt-4 mb-3">
          <Popup/>
        </v-col>
      </v-row>
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon class="white--text">{{link.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Popup from './Popup.vue'

interface ILinks {
  icon: string,
  text: string,
  route: string
}

@Component({
  components: {
    Popup
  }
})
export default class Navbar extends Vue {
  protected drawer= false;
 protected links: Array<ILinks> = [
   { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/' },
   { icon: 'mdi-folder', text: 'My Projects', route: '/projects' },
   { icon: 'mdi-account', text: 'Team', route: '/team' }
 ];
}
</script>
