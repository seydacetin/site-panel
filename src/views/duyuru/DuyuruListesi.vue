<template>
  <v-card>
    <v-data-table :headers="headers" :items="usreList" class="table-rounded" hide-default-footer disable-sort>
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

      <template #[`item.date`]="{item}">
        <div class="d-flex flex-column">
          <span class="d-block font-weight-semibold text--primary text-truncate">{{ item.date }}</span>
        </div>
      </template>

      <template #[`item.delete`]="{item}">
        <div class="d-flex flex-column">
          <v-btn type="reset" outlined class="mx-2" @click="deleteDuyuru(item.id)">
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
        { text: 'Başlık', value: 'title' },
        { text: 'Duyuru', value: 'content' },
        { text: 'Tarih', value: 'date' },
        { text: 'SİL', value: 'delete' },
      ],
      usreList: [],
      id: '',
      icons: {
        mdiSquareEditOutline,
        mdiDotsVertical,
      },
    }
  },
  created() {
    this.showDuyuru()
  },
  methods: {
    // Get All Products
    async showDuyuru() {
      const { id } = localStorage
      console.log(id)
      try {
        const response = await axios.get(`http://localhost/showDuyuru/${id}`)
        this.usreList = response.data.data
        console.log('buradaaaaaaaaaaaaaaaaa')
        console.log(response.data)
      } catch (err) {
        console.log(err)
      }
    },
    async editUser(id) {
      console.log(id)
    },
    async deleteDuyuru(id) {
      try {
        await axios.delete(`http://localhost/deleteDuyuru/${id}`)
        this.showDuyuru()
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>
