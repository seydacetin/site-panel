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
          @click="updateUser"
        >
          Güncelle
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
      id: '',
      icons: {
        mdiAccountOutline,
        mdiEmailOutline,
        mdiCellphone,
        mdiLockOutline,
      },
    }
  },
  created() {
    this.getUser()
  },
  methods: {
    // Get Product By Id
    async getUser() {
      console.log(this.$route.params.id)
      try {
        const response = await axios.get(
          `http://localhost:5001/showSablon/${this.$route.params.id}`,
        )
        this.title = response.data.title
        this.content = response.data.content
        this.id = response.data.id
      } catch (err) {
        console.log(err)
      }
    },
    async updateUser() {
      try {
        await axios.put(
          `http://localhost:5001/updateSablon/${this.$route.params.id}`,
          {
            title: this.title,
            content: this.content,
            id: this.id,
          },
        )
        this.name = ''
        this.number = ''
        this.$router.push('/sablon')
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>
