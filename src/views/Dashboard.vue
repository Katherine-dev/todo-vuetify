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

interface IProject {
  title: string,
  person: string,
  due: string,
  status: string,
  content: string
}

@Component
export default class Dashboard extends Vue {
  protected projects:Array<IProject> = [
    { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
    { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
    { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
    { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' }
  ];

  protected sortBy (prop: keyof IProject) {
    this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
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
