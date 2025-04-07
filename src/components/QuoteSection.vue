<template>
  <section class="quote-section" :class="props.isOpen && 'hidden'">
    <p v-if="error">Ooops! Something went wrong! Please try again later!</p>
    <p v-if="data" class="content">
      {{ data.content }}
    </p>
    <h2 v-if="data" class="author">{{ data.author }}</h2>
  </section>
</template>

<style lang="scss">
@import '../assets/base.scss';

.quote-section {
  padding-top: 56px;
  width: 50%;
  transition: all 300ms 100ms;
  @include mobile-only() {
    width: 100%;
  }

  &.hidden {
    opacity: 0;
    transition: all 300ms;
  }
  .author {
    margin-top: 13px;
    font-size: 18px;
    font-weight: 700;
    @include mobile-only() {
      font-size: 13px;
    }
  }
}
</style>

<script setup>
import { useFetch } from '../libs/useFetch.js'
const props = defineProps({
  isOpen: Boolean,
})

const { data, error } = useFetch('https://type.fit/api/quotes')

console.log(data)
</script>
