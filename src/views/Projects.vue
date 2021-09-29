<template>
 <div class="projects" style="height:100vh">

    <v-subheader class="grey--text">Projects</v-subheader>

      <v-container fill-height class="my-5" style="align-items: flex-start">
        <v-expansion-panels accordion>
          <v-expansion-panel v-for="project in myProjects()" :key="project.title">
            <v-expansion-panel-header>
              {{project.title}}
            </v-expansion-panel-header>
              <v-expansion-panel-content>
               <div class="font-weight-bold grey--text">
                 due by {{project.due}}
               </div>
              <div>
                {{project.content}}
              </div>
              </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
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
    content: string
  }

@Component({
})
export default class Projects extends Vue {
  protected projects: Array<IProject> =[]

  protected myProjects () {
    return this.projects.filter(project => {
      return project.person === 'Katherine-dev'
    })
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
