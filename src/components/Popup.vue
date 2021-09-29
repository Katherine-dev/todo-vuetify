
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
        <v-form class="px-3" ref="form">
          <v-text-field
          label="Title"
          v-model="title"
          prepend-icon="mdi-folder"
          :rules="inputRules"
          ></v-text-field>
          <v-textarea
          label="Information"
          v-model="content"
          prepend-icon="mdi-pencil"
          :rules="inputRules"
          ></v-textarea>

            <v-menu>
              <template v-slot:activator="{ on }">
                <v-text-field
                :value="formattedDate"
                label="Due data"
                prepend-icon="mdi-calendar-range"
                :rules="inputRules"
                v-on="on"
                ></v-text-field>
              </template>

              <v-date-picker
              v-model="due"
              :rules="inputRules"
              ></v-date-picker>
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
import db from '@/fb'

@Component
export default class Popup extends Vue {
  protected title = '';
  protected content = '';
  protected due: any = null;
  protected inputRules = [
    (v: string) => (v && v.length >= 3) || 'Minimum length is 3 characters'
  ];

  protected submit (): void {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      const project = {
        title: this.title,
        content: this.content,
        person: 'Katherine-dev',
        status: 'ongoing',
        due: format(parseISO(this.due), 'do MMM yyyy')
      }
      // async returns promise
      db.collection('projects').add(project)
        .then(() => console.log('added to db'))
    }
  }

  protected get formattedDate () {
    return this.due ? format(parseISO(this.due), 'do MMM yyyy') : ''
  }
}
</script>
