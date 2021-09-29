<template>
 <div class="dashboard" style="height:100vh; overflow-y:scroll; -webkit-overflow-scrolling: touch;overflow-y: scroll;">
    <v-subheader  class="grey--text ">Dashboard</v-subheader>
      <v-container fill-height class="my-5" style="align-content: flex-start">

        <v-row class="mb-3">
          <v-tooltip top>
            <template v-slot:activator="{ on }">
          <v-btn small text color="grey" @click="sortBy(`title`)" v-on="on">
            <v-icon left small depressed>mdi-folder</v-icon>
            <span class="caption text-lowercase">by project name</span>
          </v-btn>
          </template>
           <span>Sort project by project name</span>
          </v-tooltip>

          <v-tooltip top>
            <template v-slot:activator="{ on }">
          <v-btn small text color="grey" @click="sortBy(`person`)" v-on="on">
            <v-icon left small depressed>mdi-account</v-icon>
            <span class="caption text-lowercase">by person</span>
          </v-btn>
          </template>
           <span>Sort project by person</span>
          </v-tooltip>

        </v-row>
        <v-card flat width="100%" class="pa-3" v-for="project in projects" :key="project.title">
          <v-row wrap :class="`pa-3 project ${project.status}`">
            <v-col cols=12 md=6>
              <div class="caption grey--text">
                Project title
              </div>
              <div>
                {{project.title}}
              </div>
            </v-col>
            <v-col cols=6 sm=4 md=2>
              <div class="caption grey--text">
                Person
              </div>
              <div>
                {{project.person}}
              </div>
              </v-col>
              <v-col cols=6 sm=4 md=2>
              <div class="caption grey--text">
                Due by
              </div>
              <div>
                {{project.due}}
              </div>
            </v-col>
            <v-col cols=12 sm=4 md=2>
              <div class="float-right">
                <v-chip small :class="`${project.status} white--text caption my-2`">{{project.status}}</v-chip>
              </div>
            </v-col>
          </v-row>
          <!-- remember this -->
          <v-row cols="12">
              <v-divider></v-divider>
          </v-row>
        </v-card>
      </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import db from '@/fb'

interface IProject {
  title: string,
  person: string,
  due: string,
  status: string,
  content: string,
  id: string
}

@Component
export default class Dashboard extends Vue {
  protected projects: Array<IProject> = [];

  protected sortBy (prop: keyof IProject) {
    this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
  }

  created () {
    db.collection('projects').onSnapshot(res => {
      const changes = res.docChanges()

      changes.forEach(change => {
        if (change.type === 'added') {
          const newPr = {
            title: change.doc.data().title,
            person: change.doc.data().person,
            status: change.doc.data().status,
            due: change.doc.data().due,
            content: change.doc.data().content,
            id: change.doc.id
          }
          this.projects.push(newPr)
        }
      })
    })
  }
}
</script>

<style scoped>
.project.complete {
  border-left: 4px solid #3cd1c2
}
.project.ongoing {
  border-left: 4px solid orange
}
.project.overdue {
  border-left: 4px solid tomato
}
.v-chip.complete {
  background: #3cd1c2 !important;
}
.v-chip.ongoing {
  background: orange !important;
}
.v-chip.overdue {
  background: tomato !important;
}
</style>
