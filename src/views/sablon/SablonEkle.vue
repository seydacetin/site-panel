<template>
  <v-card>
    <v-card-title>Şablon Ekle</v-card-title><v-card-text>
      <v-form>
        <v-text-field
          v-model="title"
          :prepend-inner-icon="icons.mdiAccountOutline"
          label="Ad Soyad"
          outlined
          dense
          placeholder="Ad Soyad"
        ></v-text-field>

        <v-text-field
          v-model="content"
          :prepend-inner-icon="icons.mdiAccountOutline"
          label="Ad Soyad"
          outlined
          dense
          placeholder="Ad Soyad"
        ></v-text-field>

        <v-btn
          color="primary"
          @click="saveProduct"
        >
          Kaydet
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
      try {
        await axios.post('http://localhost:5001/addSablon', {
          title: this.title,
          user_id: localStorage.id,
          content: this.content,
        })
        this.title = ''
        this.content = ''
        this.$router.go(this.$router.currentRoute)
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>
