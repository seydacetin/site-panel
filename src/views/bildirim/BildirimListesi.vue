<template>
  <v-card>
    <v-data-table
      :headers="headers"
      :items="usreList"
      class="table-rounded"
      hide-default-footer
      disable-sort
    >
      <!-- name -->
      <template #[`item.name`]="{ item }">
        <div class="d-flex flex-column">
          <span class="d-block font-weight-semibold text--primary text-truncate">{{ item.name }}</span>
        </div>
      </template>
      <template #[`item.title`]="{ item }">
        <div class="d-flex flex-column">
          <span class="d-block font-weight-semibold text--primary text-truncate">{{ item.title }}</span>
        </div>
      </template>
      <template #[`item.message`]="{ item }">
        <div class="d-flex flex-column">
          <span class="d-block font-weight-semibold text--primary text-truncate">{{ item.message }}</span>
        </div>
      </template>
      <template #[`item.date`]="{ item }">
        <div class="d-flex flex-column">
          <span class="d-block font-weight-semibold text--primary text-truncate">{{ item.date }}</span>
        </div>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { mdiSquareEditOutline, mdiDotsVertical } from '@mdi/js'
import axios from 'axios'

export default {
  data() {
    return {
      headers: [
        { text: 'AD-SOYAD', value: 'name' },
        { text: 'BAŞLIK', value: 'title' },
        { text: 'MESAJ', value: 'message' },
        { text: 'TARİH', value: 'date' },
      ],
      usreList: [],
      id: '',
      status: {
        1: 'Current',
        2: 'Professional',
        3: 'Rejected',
        4: 'Resigned',
        5: 'Applied',
      },
      icons: {
        mdiSquareEditOutline,
        mdiDotsVertical,
      },
    }
  },
  created() {
    this.getUsers()
  },
  methods: {
    // Get All Products
    async getUsers() {
      const { id } = localStorage
      console.log(id)
      try {
        const response = await axios.get(`http://localhost:5001/allSMS/${id}`)
        this.usreList = response.data
        console.log(response.data)
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>
