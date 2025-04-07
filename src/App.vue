<template>
  <img class="bg-img" src="/assets/desktop/bg-image-daytime.jpg" alt="" />
  <div class="mask"></div>

  <div class="wrapper">
    <main>
      <QuoteSection :isOpen="isOpen" />
    </main>
    <TimeHeader @closeMore="isOpen = false" @openMore="isOpen = true" :isOpen="isOpen" />
  </div>
  <FooterData :isOpen="isOpen" />
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
  background-color: black;
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
  &::after {
    content: ' ';
    position: absolute;
    background-color: black;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }
}
</style>

<script setup>
import { ref } from 'vue'
import TimeHeader from './components/TimeHeader.vue'
import FooterData from './components/FooterData.vue'
import QuoteSection from './components/QuoteSection.vue'

const isOpen = ref(false)
</script>
