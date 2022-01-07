<template>
  <v-card>
    <v-card-title>Gider Ekle</v-card-title
    ><v-card-text>
      <v-form>
        <v-text-field v-model="title" label="Gider Adı" outlined dense placeholder="Gider Adı"></v-text-field>
        <v-text-field
          v-model="content"
          label="Gider Açıkla"
          outlined
          dense
          placeholder="Gider açıklaması"
        ></v-text-field>
        <v-text-field v-model="price" label="Ücret" outlined dense placeholder="Ücret"></v-text-field>

        <v-btn color="primary" @click="saveProduct">
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
      price: '',
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
        await axios.post('http://localhost/addGider', {
          price: this.price,
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
