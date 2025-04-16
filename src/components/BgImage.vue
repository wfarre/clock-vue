<template>
  <img class="bg-img bg-img--desktop" :src="bgImage" alt="" />
  <img class="bg-img bg-img--mobile" :src="bgImageMobile" alt="" />
  <div class="mask"></div>
</template>

<style lang="scss">
@import '../assets/base.scss';

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

  &--mobile {
    display: none;
  }

  @include mobile-only {
    &--mobile {
      display: block;
    }
    &--desktop {
      display: none;
    }
  }
}
</style>
<script setup>
import { computed } from 'vue'
import { useCurrentTime } from '../libs/useCurrentTime'
import bgImgNight from '/assets/desktop/bg-image-nighttime.jpg'
import bgImgDay from '/assets/desktop/bg-image-daytime.jpg'

import bgImgNightMobile from '/assets/mobile/bg-image-nighttime.jpg'
import bgImgDayMobile from '/assets/mobile/bg-image-daytime.jpg'

const { hours } = useCurrentTime()

const bgImage = computed(() => (hours.value >= 7 && hours.value < 18 ? bgImgDay : bgImgNight))
const bgImageMobile = computed(() =>
  hours.value >= 7 && hours.value < 18 ? bgImgDayMobile : bgImgNightMobile,
)
</script>
