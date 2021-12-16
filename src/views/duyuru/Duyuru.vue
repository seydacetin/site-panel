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
        <duyuru-listesi> </duyuru-listesi>
      </v-tab-item>

      <v-tab-item>
        <duyuru-gonder> </duyuru-gonder>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import { ref } from '@vue/composition-api'

import DuyuruListesi from './DuyuruListesi.vue'
import DuyuruGonder from './DuyuruGonder.vue'

export default {
  components: {
    DuyuruListesi,
    DuyuruGonder,
  },
  created() {
    if (localStorage.value === 'false') {
      this.$router.push('/pages/login')
    }
  },
  setup() {
    const tab = ref('')

    const tabs = [
      { title: 'Duyuru Listesi' },
      { title: 'Duyuru Gönder' },
    ]

    return {
      tab,
      tabs,
    }
  },
}
</script>
