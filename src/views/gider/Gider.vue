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
        <gider-listesi></gider-listesi>
      </v-tab-item>
      <v-tab-item>
        <gider-ekle></gider-ekle>
      </v-tab-item>

    </v-tabs-items>
  </v-card>
</template>

<script>
import { ref } from '@vue/composition-api'

import GiderListesi from './GiderListesi.vue'
import GiderEkle from './GiderEkle.vue'

export default {
  components: {
    GiderListesi,
    GiderEkle,
  },
  created() {
    if (localStorage.value === 'false') {
      this.$router.push('/pages/login')
    }
  },
  setup() {
    const tab = ref('')

    const tabs = [
      { title: 'Gider Listesi' },
      { title: 'Gider Ekle' },

    ]

    return {
      tab,
      tabs,
    }
  },
}
</script>
