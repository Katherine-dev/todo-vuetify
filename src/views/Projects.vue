<template>
 <div class="projects" style="height:100%">

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
  interface IProject {
    title: string,
    person: string,
    due: string,
    status: string,
    content: string
  }
  @Component
export default class Projects extends Vue {
      projects: Array<IProject> =[
        { title: 'Design a new website', person: 'Katherine-dev', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
        { title: 'Code up the homepage', person: 'Nionoku', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
        { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
        { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
        { title: 'Create a community forum for me', person: 'Katherine-dev', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' }
      ]

      myProjects () {
        return this.projects.filter(project => {
          return project.person === 'Katherine-dev'
        })
      }
}
</script>
