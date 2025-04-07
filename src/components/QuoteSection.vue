<template>
  <section class="quote-section" :class="props.isOpen && 'hidden'">
    <p class="content">
      “The science of operations, as derived from mathematics more especially, is a science of
      itself, and has its own abstract truth and value.”
    </p>
    <h2 class="author">Ada Lovelace</h2>
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
const props = defineProps({
  isOpen: Boolean,
})
</script>
