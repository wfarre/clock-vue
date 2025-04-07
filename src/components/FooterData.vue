<template>
  <footer class="footer" :class="props.isOpen && 'open'">
    <ul>
      <li v-for="(info, index) in infos" v-bind:key="index">
        <figure class="info">
          <figcaption class="info__title">{{ info.title }}</figcaption>
          <p class="info__data">{{ info.data }}</p>
        </figure>
      </li>
    </ul>
  </footer>
</template>

<style lang="scss">
@import '../assets/base.scss';

.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: hsl(0, 0%, 100%, 0.7);
  backdrop-filter: blur(10px);
  color: black;

  transform: scaleY(0);
  transform-origin: bottom center;
  transition: all 600ms;

  &.open {
    transform: scaleY(1);
    transition: all 600ms 200ms;
  }
}

ul {
  padding: 74px calc((165 / 1440) * 100vw);
  max-width: 1440px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 42px;

  @include mobile-only() {
    padding: 48px 25px;
    grid-template-columns: 1fr;
  }
}

.info {
  display: flex;
  flex-direction: column;
  gap: 9px;

  @include mobile-only() {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  &__title {
    font-size: 15px;
    letter-spacing: 4px;
    text-transform: uppercase;
    @include mobile-only() {
      font-size: 10px;
    }
  }
  &__data {
    font-size: 56px;
    font-weight: 700;
    @include mobile-only() {
      font-size: 20px;
    }
  }
}
</style>

<script setup>
import { ref } from 'vue'

const infos = ref([
  {
    title: 'current timezone',
    data: 'Europe/London',
  },
  {
    title: 'Day of the week',
    data: '5',
  },
  {
    title: 'Day of the year',
    data: '295',
  },
  {
    title: 'week number',
    data: '42',
  },
])
const props = defineProps({
  isOpen: Boolean,
})
</script>
