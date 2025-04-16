<template>
  <BgImage />

  <div class="wrapper">
    <main>
      <QuoteSection :isOpen="isOpen" />
    </main>
    <TimeHeader
      @closeMore="isOpen = false"
      @openMore="isOpen = true"
      :isOpen="isOpen"
      :data="location"
    />
  </div>
  <FooterData :isOpen="isOpen" :data="location" />
</template>

<style scoped lang="scss">
@import './assets/base.scss';
.wrapper {
  max-width: 1440px;
  margin: 0 calc((165 / 1440) * 100vw);
  position: relative;
  color: white;
  min-height: 100vh;
  @include mobile-only() {
    margin: 0 25px;
    font-size: 13px;
  }
}
</style>

<script setup>
import { ref } from 'vue'
import TimeHeader from './components/TimeHeader.vue'
import FooterData from './components/FooterData.vue'
import QuoteSection from './components/QuoteSection.vue'
import Ipbase from '@everapi/ipbase-js'
import BgImage from './components/BgImage.vue'

const location = ref(null)

const ipBase = new Ipbase(import.meta.env.API_KEY)
ipBase.info().then((res) => {
  location.value = res.data
})

const isOpen = ref(false)
</script>
