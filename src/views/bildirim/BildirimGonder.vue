<template>
  <v-card>
    <v-card-title>Bildirim Gönder</v-card-title><v-card-text>
      <v-form>
        <v-text-field
          v-model="name"
          :prepend-inner-icon="icons.mdiAccountOutline"
          label="Ad-Soyad"
          outlined
          dense
          placeholder="Ad-Soyad"
        ></v-text-field>

        <v-text-field
<<<<<<< HEAD
          v-model="title"
=======
          v-model="name"
>>>>>>> aaaacdd4b2fcbb7f42f6cde480ee8b507d9f87b5
          :prepend-inner-icon="icons.mdiAccountOutline"
          label="Başlık"
          outlined
          dense
          placeholder="Başlık"
        ></v-text-field>

        <v-text-field
<<<<<<< HEAD
          v-model="content"
          :prepend-inner-icon="icons.mdiAccountOutline"
          label="Bildirim"
          outlined
          dense
          placeholder="Bildirim"
        ></v-text-field>
        <v-btn
          color="primary"
          @click="saveProduct"
=======
          v-model="messsage"
          :prepend-inner-icon="icons.mdiAccountOutline"
          label="Mesaj"
          outlined
          dense
          placeholder="Mesaj"
        ></v-text-field>
        <v-btn
          color="primary"
          @click="sendMessage"
>>>>>>> aaaacdd4b2fcbb7f42f6cde480ee8b507d9f87b5
        >
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
      name: '',
<<<<<<< HEAD
      title: '',
      content: '',
=======
      gsm: '',
      messsage: '',
      user: '',
      sablon: '',
      users_options: [],
      data: [],
      sablon_options: [],
      data2: [],
>>>>>>> aaaacdd4b2fcbb7f42f6cde480ee8b507d9f87b5
      icons: {
        mdiAccountOutline,
        mdiEmailOutline,
        mdiCellphone,
        mdiLockOutline,
      },
    }
  },
<<<<<<< HEAD
  methods: {
    async saveProduct() {
      try {
        await axios.post('http://localhost/addBildirim', {
          user_id: this.name,
          title: this.title,
          content: this.content,
        })
        this.$router.go(this.$router.currentRoute)
=======
  created() {
    this.getRehber()
    this.getSablon()
  },
  methods: {
    // Create New product
    async ayarla() {
      let i
      const listeUzunluk = this.users_options.length
      // eslint-disable-next-line no-plusplus
      for (i = 0; i < listeUzunluk; i++) {
        if (this.users_options[i] === this.user) {
          this.name = this.data[i].name
        }
      }
      console.log(this.user)
    },
    async ayarlaSablon() {
      let i
      const listeUzunluk = this.sablon_options.length
      // eslint-disable-next-line no-plusplus
      for (i = 0; i < listeUzunluk; i++) {
        if (this.sablon_options[i] === this.sablon) {
          this.messsage = this.data2[i].content
        }
      }
      console.log(this.user)
    },
    async sendMessage() {
      await this.smsKaydet()
      await this.smsGonder()
      try {
        const response = axios.post(
          'https://sms.cenkkaraboa.com/sms.php/',
          {
            gsm: this.gsm,
            messsage: this.messsage,
          },
          <header>Access-Control-Allow-Origin: http://192.168.1.132:8080</header>,
        )
        console.log('test')
        console.log(response)
        this.gsm = ''
        this.messsage = ''
      } catch (err) {
        console.log(err)
      }

      this.$router.go(this.$router.currentRoute)
      this.$router.push('/Sms')
    },
    async smsGonder() {
      try {
        await axios.post('http://localhost:5001/paketDusur', {
          user_id: localStorage.id,
        })
      } catch (err) {
        console.log(err)
      }
    },
    async smsKaydet() {
      try {
        await axios.post('http://localhost:5001/addSms', {
          name: this.name,
          user_id: localStorage.id,
          message: this.messsage,
          date: Date(),
        })
        this.name = ''
>>>>>>> aaaacdd4b2fcbb7f42f6cde480ee8b507d9f87b5
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>
