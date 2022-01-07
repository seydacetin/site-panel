<template>
  <v-card id="account-setting-card">
    <!-- tabs -->
    <v-tabs
      v-model="tab"
      show-arrows
    >
      <v-tab
        v-for="tab in tabs"
        :key="tab.icon"
      >
        <span>{{ tab.title }}</span>
      </v-tab>
    </v-tabs>

    <!-- tabs item -->
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <password-setting></password-setting>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import { ref } from '@vue/composition-api'

import PasswordSetting from './PasswordSetting.vue'

export default {
  components: {
    PasswordSetting,
  },
  created() {
    if (localStorage.value === 'false') {
      this.$router.push('/pages/login')
    }
  },
  setup() {
    const tab = ref('')
    const tabs = [{ title: 'Ayarlar' }]

    return {
      tab,
      tabs,
    }
  },
}
</script>
