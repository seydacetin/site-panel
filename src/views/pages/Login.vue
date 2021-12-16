<template>
  <div class="auth-wrapper auth-v1">
    <div class="auth-inner" style="margin: 10% 30% 0% 30%">
      <v-card class="auth-card">
        <!-- logo -->
        <v-card-title class="d-flex align-center justify-center py-7">
          <v-img :src="require('@/assets/images/avatars/3.png')" max-height="110px" max-width="110px"></v-img>
        </v-card-title>

        <!-- login form -->
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="username"
              outlined
              label="Kullanıcı Adı"
              placeholder="john@example.com"
              hide-details
              class="mb-3"
            ></v-text-field>

            <v-text-field
              v-model="password"
              outlined
              :type="isPasswordVisible ? 'text' : 'password'"
              label="Şifre"
              placeholder="············"
              :append-icon="isPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
              hide-details
              @click:append="isPasswordVisible = !isPasswordVisible"
            ></v-text-field>
            <v-btn block color="primary" class="mt-6" @click="saveProduct"> Giriş </v-btn>
          </v-form>
        </v-card-text>

        <v-card-text class="d-flex align-center justify-center flex-wrap mt-2">
          <span class="me-2"> Hesabın yok mu? </span>
          <router-link :to="{ name: 'pages-register' }"> Kayıt Ol </router-link>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiEyeOutline, mdiEyeOffOutline } from '@mdi/js'
import { ref } from '@vue/composition-api'
import axios from 'axios'

export default {
  name: 'Login',
  created() {
    if (localStorage.value === 'true') {
      this.$router.push('/')
    }
  },
  setup() {
    const isPasswordVisible = ref(false)
    const username = ref('')
    const password = ref('')

    return {
      isPasswordVisible,
      username,
      password,

      icons: {
        mdiEyeOutline,
        mdiEyeOffOutline,
      },
    }
  },
  methods: {
    async saveProduct() {
      if (this.username.length > 0 && this.password.length > 0) {
        try {
          const response = await axios.post('http://localhost/showUser', {
            username: this.username,
          })
          console.log(response)
          console.log(response.data.data.password)
          if (response.data.data.password === this.password) {
            if (localStorage.value === 'true') {
              localStorage.value = 'false'
            } else {
              localStorage.value = 'true'
            }
            console.log(localStorage.value)

            localStorage.id = response.data.id
            await this.$router.push('/')
          } else {
            console.log('Kullanıcı Yok ya da şifre yanlış')
            this.username = ''
            this.password = ''
          }
        } catch (err) {
          console.log(err)
        }
      } else {
        console.log(localStorage.value)
      }
    },
  },
}
</script>

<style lang="scss">
@import '~@/plugins/vuetify/default-preset/preset/pages/auth.scss';
</style>
