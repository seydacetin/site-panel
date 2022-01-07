<template>
  <v-card>
    <v-card-title>Duyuru Gönder</v-card-title
    ><v-card-text>
      <v-form>
        <v-text-field v-model="title" label="Başlık" outlined dense placeholder="Başlık"></v-text-field>
        <v-text-field
          v-model="content"
          label="Duyuru"
          outlined
          dense
          placeholder="Duyuru"
        ></v-text-field>

        <v-btn color="primary" @click="saveProduct">
          Gönder
        </v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiAccountOutline, mdiEmailOutline, mdiCellphone, mdiLockOutline } from '@mdi/js'
import axios from 'axios'

export default {
  data() {
    return {
      title: '',
      content: '',
      user_id: '',
      icons: {
        mdiAccountOutline,
        mdiEmailOutline,
        mdiCellphone,
        mdiLockOutline,
      },
    }
  },
  methods: {
    async saveProduct() {
      const { id } = localStorage
      try {
        await axios.post('http://localhost/addDuyuru', {
          title: this.title,
          user_id: id,
          content: this.content,
        })
        this.$router.go(this.$router.currentRoute)
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>
