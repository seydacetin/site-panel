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
      <template #[`item.title`]="{item}">
        <div class="d-flex flex-column">
          <span class="d-block font-weight-semibold text--primary text-truncate">{{ item.title }}</span>
        </div>
      </template>

      <template #[`item.content`]="{item}">
        <div class="d-flex flex-column">
          <span class="d-block font-weight-semibold text--primary text-truncate">{{ item.content }}</span>
        </div>
      </template>

      <template #[`item.price`]="{item}">
        <div class="d-flex flex-column">
          <span class="d-block font-weight-semibold text--primary text-truncate">{{ item.price }}</span>
        </div>
      </template>
       <template #[`item.date`]="{item}">
        <div class="d-flex flex-column">
          <span class="d-block font-weight-semibold text--primary text-truncate">{{ item.date }}</span>
        </div>
      </template>

      <template #[`item.delete`]="{item}">
        <div class="d-flex flex-column">
          <v-btn
            type="reset"
            outlined
            @click='deleteUser(item.id)'
            class="mx-2"
          >
            Sil
          </v-btn>
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
        { text: 'Gider', value: 'title' },
        { text: 'Açıklama', value: 'content' },
        { text: 'Fiyat', value: 'price' },
        { text: 'Tarih', value: 'date' },
        { text: 'SİL', value: 'delete' },
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
        const response = await axios.get(`http://localhost/showGider/${id}`)
        this.usreList = response.data
        console.log(response.data)
      } catch (err) {
        console.log(err)
      }
    },
    async editUser(id) {
      console.log(id)
    },
    async deleteUser(id) {
      try {
        await axios.delete(`http://localhost/deleteGider/${id}`)
        this.getUsers()
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>
