<template>
  <v-card
    flat
    class="pa-3 mt-2"
  >
    <v-card-text>
      <v-form class="multi-col-validation mt-6">
        <v-row>
          <v-col
            md="6"
            cols="12"
          >
            <v-text-field
              v-model="username"
              label="Kullanıcı Adı"
              dense
              outlined
            ></v-text-field>
          </v-col>

          <v-col
            md="6"
            cols="12"
          >
            <v-text-field
              v-model="name"
              label="Ad Soyad"
              dense
              outlined
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="store_name"
              label="Mağaza Adı"
              dense
              outlined
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="gmail"
              dense
              label="Gmail"
              outlined
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="number"
              dense
              outlined
              label="Telefon"
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="sms"
              dense
              outlined
              label="Sms Alt Başlığı"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-btn
              color="primary"
              class="me-3 mt-4"
              @click="updateUser"
            >
              DEĞİŞİKLİKLERİ KAYDET
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiAlertOutline, mdiCloudUploadOutline } from '@mdi/js'
import axios from 'axios'

export default {
  data() {
    return {
      username: '',
      name: '',
      store_name: '',
      gmail: '',
      number: '',
      sms: '',
      icons: {
        mdiAlertOutline,
        mdiCloudUploadOutline,
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
        const { id } = localStorage
        const response = await axios.get(
          `http://localhost:5001/showUser/${id}`,
        )
        this.username = response.data.username
        this.name = response.data.name
        this.store_name = response.data.store_name
        this.sms = response.data.sms
        this.gmail = response.data.gmail
        this.number = response.data.number
        this.id = response.data.id
      } catch (err) {
        console.log(err)
      }
    },
    async updateUser() {
      if (this.newPassword !== this.cPassword) {
        console.log('hata')
      } else {
        try {
          await axios.put(
            `http://localhost:5001/updateAll/${this.$route.params.id}`,
            {
              username: this.username,
              name: this.name,
              store_name: this.store_name,
              sms: this.sms,
              gmail: this.gmail,
              number: this.number,
              id: this.id,
            },
          )
          this.$router.go(this.$router.currentRoute)
        } catch (err) {
          console.log(err)
        }
      }
    },
  },
}
</script>
