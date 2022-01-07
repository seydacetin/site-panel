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

      <template #[`item.edit`]="{item}">
        <div class="d-flex flex-column">
          <router-link
            :to="{ name: 'sablonDuzenle', params: { id: item.id } }"
            style="margin: 5px"
            class="button is-info is-small"
          >
            Düzenle
          </router-link>
        </div>
      </template>

      <template #[`item.delete`]="{item}">
        <div class="d-flex flex-column">
          <v-btn
            type="reset"
            outlined
            class="mx-2"
            @click="deleteUser(item.id)"
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
        { text: 'AD-SOYAD', value: 'title' },
        { text: 'TELEFON NUMARASI', value: 'content' },
        { text: 'DÜZENLE', value: 'edit' },
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
        const response = await axios.get(`http://localhost:5001/allSablon/${id}`)
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
        await axios.delete(`http://localhost:5001/deleteSablon/${id}`)
        this.getUsers()
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>
