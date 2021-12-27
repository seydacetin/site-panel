<template>
  <div class="auth-wrapper auth-v1">
    <div class="auth-inner" style="margin: 5% 10% 0% 10%">
      <v-card class="auth-card">
        <!-- logo -->
        <v-card-title class="d-flex align-center justify-center py-7">
          <v-img
            :src="require('@/assets/images/avatars/3.png')"
            max-height="110px"
            max-width="110px"
            alt="logo"
            contain
            class="me-3"
          ></v-img>
        </v-card-title>
        <!-- login form -->
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="username"
              :type="text"
              outlined
              label="Kullanıcı Adı"
              hide-details
              class="mb-2"
            ></v-text-field>
            <v-text-field
              v-model="password"
              outlined
              :type="isPasswordVisible ? 'text' : 'password'"
              label="Şifre"
              :append-icon="isPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
              hide-details
              @click:append="isPasswordVisible = !isPasswordVisible"
            ></v-text-field>
            <v-btn block color="primary" class="mt-8" @click="saveProduct">
              Admin Ekle
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
import { mdiEyeOutline, mdiEyeOffOutline } from '@mdi/js'
import { ref } from '@vue/composition-api'
import axios from 'axios'

export default {
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
          await axios.post('http://localhost/addUser', {
            name: this.username,
            username: this.username,
            password: this.password,
            address: 's',
            date: 'ss',
          })
        } catch (err) {
          console.log(err)
        }
      } else {
        console.log('Şifre Yanlış')
      }
    },
  },
}
</script>

<style lang="scss">
@import '~@/plugins/vuetify/default-preset/preset/pages/auth.scss';
</style>
