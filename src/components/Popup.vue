
<template>
  <v-dialog max-width="600px">
    <template v-slot:activator="{ on }">
    <v-btn text class="success" v-on="on" >
      Add new project
    </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h2>Add a new project</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3">
          <v-text-field
          label="Title"
          v-model="title"
          prepend-icon="mdi-folder"
          ></v-text-field>
          <v-textarea
          label="Information"
          v-model="content"
          prepend-icon="mdi-pencil"
          ></v-textarea>

            <v-menu>
              <template v-slot:activator="{ on }">
                <v-text-field
                :value="formattedDate"
                label="Due data"
                prepend-icon="mdi-calendar-range"
                v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="due"></v-date-picker>
            </v-menu>

          <v-btn
          text
          class="success mx-0 mt-3"
          @click="submit">
            Add project
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'

@Component
export default class Popup extends Vue {
  title = '';
  content = '';
  due: any = null;

  submit () {
    console.log(this.title, this.content)
  }

  get formattedDate () {
    return this.due ? format(parseISO(this.due), 'do MMM yyyy') : ''
  }
}
</script>
