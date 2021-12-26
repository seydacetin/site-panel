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
        <sablon-listesi></sablon-listesi>
      </v-tab-item>

      <v-tab-item>
        <sablon-ekle></sablon-ekle>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import { ref } from '@vue/composition-api'

import SablonListesi from './SablonListesi.vue'
import SablonEkle from './SablonEkle.vue'

export default {
  components: {
    SablonListesi,
    SablonEkle,
  },
  created() {
    if (localStorage.value === 'false') {
      this.$router.push('/pages/login')
    }
  },
  setup() {
    const tab = ref('')

    const tabs = [
      { title: 'Sablon Listesi' },
      { title: 'Sablon Ekle' },

    ]

    return {
      tab,
      tabs,
    }
  },
}
</script>
