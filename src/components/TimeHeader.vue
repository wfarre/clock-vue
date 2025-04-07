<template>
  <header class="header" :class="isOpen && 'toTop'">
    <div>
      <p class="text">Good morning<span class="mobile-hidden">, it's currently</span></p>
      <p class="time">11:37<span>BST</span></p>
      <p class="text">in London, UK</p>
    </div>
    <MoreButton
      :isOpen="props.isOpen"
      @openMore="emits('openMore')"
      @closeMore="emits('closeMore')"
    />
  </header>
</template>
<style lang="scss">
@import '../assets/base.scss';

.header {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 48px;
  align-items: flex-end;
  bottom: 98px;
  left: 0;
  transition: all 600ms;

  @include mobile-only {
    flex-direction: column;
    align-items: flex-start;
  }

  &.toTop {
    transform: translateY(calc(-100% + 98px - 249px));
    transition: all 600ms 200ms;
  }

  .text {
    text-transform: uppercase;
    font-size: 20px;
    letter-spacing: 4px;
    @include mobile-only() {
      font-size: 15px;
      .mobile-hidden {
        display: none;
      }
    }
  }

  .time {
    margin: 0;
    font-size: 200px;
    font-weight: 900;
    line-height: 1;

    span {
      font-size: 40px;
      font-weight: 300;
    }

    @include mobile-only() {
      font-size: 100px;
      span {
        font-size: 15px;
      }
    }
  }
}
</style>

<script setup>
import MoreButton from './MoreButton.vue'

const props = defineProps({
  isOpen: Boolean,
})

const emits = defineEmits(['closeMore', 'openMore'])
</script>
