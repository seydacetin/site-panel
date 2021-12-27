<template>
  <v-card>
    <v-card-title class="align-start">
      <span class="font-weight-semibold text-xl">Hesap Özeti</span>
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col
          v-for="data in statisticsData"
          :key="data.title"
          cols="6"
          md="3"
          class="d-flex align-center"
        >
          <v-avatar
            size="44"
            :color="resolveStatisticsIconVariation(data.title).color"
            rounded
            class="elevation-1"
          >
            <v-icon
              dark
              color="white"
              size="30"
            >
              {{ resolveStatisticsIconVariation(data.title).icon }}
            </v-icon>
          </v-avatar>
          <div class="ms-3">
            <p class="text-xs mb-0">
              {{ data.title }}
            </p>
            <h3 class="text-xl font-weight-semibold">
              {{ data.total }}
            </h3>
          </div>
        </v-col>
        <v-img
          max-width="550"
          float="left"
          src="@/assets/images/3d-characters/a.png"
          class="security-character"
          style="margin-top:220px; margin-left:200px"
        ></v-img>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import {
  mdiAccountOutline,
  mdiCurrencyUsd,
  mdiTrendingUp,
  mdiDotsVertical,
  mdiLabelOutline,
  mdiOfficeBuilding,
} from '@mdi/js'
import axios from 'axios'

export default {
  data() {
    const resolveStatisticsIconVariation = data => {
      if (data === '') return { icon: mdiOfficeBuilding, color: 'primary' }
      if (data === '') return { icon: mdiAccountOutline, color: 'info' }
      if (data === '') return { icon: mdiLabelOutline, color: 'warning' }

      return { icon: mdiAccountOutline, color: 'info' }
    }

    return {
      resolveStatisticsIconVariation,
      one: '',
      two: '',
      three: '',
      four: '',
      statisticsData: [
        {
          title: 'Ödenen Aidatlar',
          total: 0,
        },
        {
          title: 'Kalan Aidatlar',
          total: 0,
        },
        {
          title: 'Toplam Gider',
          total: 0,
        },
      ],
      icons: {
        mdiDotsVertical,
        mdiTrendingUp,
        mdiAccountOutline,
        mdiOfficeBuilding,
        mdiLabelOutline,
        mdiCurrencyUsd,
      },
    }
  },
  created() {
    this.allHizmet()
    this.getAllSms()
    this.getAllRehber()
  },

  methods: {
    async allHizmet() {
      const { id } = localStorage
      console.log(id)
      try {
        const response = await axios.get(`http://localhost:5001/allHizmet/${id}`)
        // eslint-disable-next-line no-plusplus
        this.statisticsData[0].total = response.data.length
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < response.data.length; i++) {
          // eslint-disable-next-line radix
          this.statisticsData[3].total += parseInt(response.data[i].price)
        }
      } catch (err) {
        console.log(err)
      }
    },
    async getAllSms() {
      const { id } = localStorage
      console.log(id)
      try {
        const response = await axios.get(`http://localhost:5001/allSms/${id}`)
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < response.data.length; i++) {
          // eslint-disable-next-line radix
          this.statisticsData[2].total = parseInt(response.data.length)
        }
      } catch (err) {
        console.log(err)
      }
    },
    async getAllRehber() {
      const { id } = localStorage
      console.log(id)
      try {
        const response = await axios.get(`http://localhost:5001/allRehber/${id}`)
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < response.data.length; i++) {
          // eslint-disable-next-line radix
          this.statisticsData[1].total = parseInt(response.data.length)
        }
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>
