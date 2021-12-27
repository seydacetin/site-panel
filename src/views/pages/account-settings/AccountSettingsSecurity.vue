<template>
  <v-card
    flat
    class="mt-5"
  >
    <v-form>
      <div class="px-3">
        <v-card-text class="pt-5">
          <v-row>
            <v-col
              cols="12"
              sm="8"
              md="6"
            >
              <!-- current password -->
              <v-text-field
                v-model="currentPassword"
                :type="isCurrentPasswordVisible ? 'text' : 'password'"
                :append-icon="isCurrentPasswordVisible ? icons.mdiEyeOffOutline:icons.mdiEyeOutline"
                label="Mevcut Şifre"
                outlined
                dense
                @click:append="isCurrentPasswordVisible = !isCurrentPasswordVisible"
              ></v-text-field>

              <!-- new password -->
              <v-text-field
                v-model="newPassword"
                :type="isNewPasswordVisible ? 'text' : 'password'"
                :append-icon="isNewPasswordVisible ? icons.mdiEyeOffOutline:icons.mdiEyeOutline"
                label="Yeni Şifre"
                outlined
                dense
                @click:append="isNewPasswordVisible = !isNewPasswordVisible"
              ></v-text-field>

              <!-- confirm password -->
              <v-text-field
                v-model="cPassword"
                :type="isCPasswordVisible ? 'text' : 'password'"
                :append-icon="isCPasswordVisible ? icons.mdiEyeOffOutline:icons.mdiEyeOutline"
                label="Yeni Şifre Tekrar"
                outlined
                dense
                @click:append="isCPasswordVisible = !isCPasswordVisible"
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              sm="4"
              md="6"
              class="d-none d-sm-flex justify-center position-relative"
            >
              <v-img
                contain
                max-width="170"
                src="@/assets/images/3d-characters/pose-m-1.png"
                class="security-character"
              ></v-img>
            </v-col>
          </v-row>
        </v-card-text>
      </div>

      <!-- divider -->
      <v-divider></v-divider>

      <div class="pa-3">
        <!-- action buttons -->
        <v-card-text>
          <v-btn
            color="primary"
            class="me-3 mt-3"
            @click="updateUser"
          >
            DEĞİŞTİR
          </v-btn>
        </v-card-text>
      </div>
    </v-form>
  </v-card>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiKeyOutline, mdiLockOpenOutline, mdiEyeOffOutline, mdiEyeOutline } from '@mdi/js'
import axios from 'axios'

export default {
  data() {
    return {
      isCurrentPasswordVisible: '',
      isNewPasswordVisible: '',
      currentPassword: '',
      isCPasswordVisible: '',
      newPassword: '',
      id: '',
      cPassword: '',
      icons: {
        mdiKeyOutline,
        mdiLockOpenOutline,
        mdiEyeOffOutline,
        mdiEyeOutline,
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
        this.currentPassword = response.data.password
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
            `http://localhost:5001/updateUser/${this.$route.params.id}`,
            {
              password: this.newPassword,
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

<style lang="scss" scoped>
.two-factor-auth {
  max-width: 25rem;
}
.security-character {
  position: absolute;
  bottom: -0.5rem;
}
</style>
