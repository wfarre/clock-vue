<template>
  <img class="bg-img" :src="bgImage" alt="" />
  <div class="mask"></div>

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

.mask {
  content: ' ';
  position: absolute;
  background-color: hsl(0, 0%, 0%);
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  opacity: 0.4;
}

.bg-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

<script setup>
import { computed, ref } from 'vue'
import TimeHeader from './components/TimeHeader.vue'
import FooterData from './components/FooterData.vue'
import QuoteSection from './components/QuoteSection.vue'
import Ipbase from '@everapi/ipbase-js'
import { useCurrentTime } from './libs/useCurrentTime'
import bgImgNight from '/assets/desktop/bg-image-nighttime.jpg'
import bgImgDay from '/assets/desktop/bg-image-daytime.jpg'

const location = ref(null)

const { hours } = useCurrentTime()

const bgImage = computed(() => (hours.value >= 7 && hours.value < 18 ? bgImgDay : bgImgNight))

const ipBase = new Ipbase(import.meta.env.API_KEY)
ipBase.info().then((res) => {
  location.value = res.data
})

const isOpen = ref(false)
</script>
