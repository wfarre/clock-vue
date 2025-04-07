<template>
  <button class="btn" @click="handleClick">
    {{ isOpen ? 'LESS' : 'MORE' }}
    <div class="img-wrapper" :class="props.isOpen && 'open'">
      <img src="/assets/desktop/icon-arrow-down.svg" alt="" />
    </div>
  </button>
</template>

<style lang="scss">
@import '../assets/base.scss';

.btn {
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: space-between;
  height: 56px;
  min-width: 146px;
  padding-left: 21px;
  padding-right: 11px;
  border-radius: 50px;
  text-transform: uppercase;
  letter-spacing: 4px;
  cursor: pointer;
  @include mobile-only() {
    width: 115px;
    height: 39px;
    font-size: 13px;
    padding-right: 4px;
  }

  .img-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: black;
    border-radius: 100%;
    transform: rotate(0deg);
    transition: all 300ms;

    @include mobile-only() {
      width: 32px;
      height: 32px;
    }

    &.open {
      transform: rotate(180deg);
      transition: all 300ms;
    }
  }
}
</style>

<script setup>
const props = defineProps({
  isOpen: Boolean,
})
const emits = defineEmits(['closeMore', 'openMore'])

const handleClick = () => {
  props.isOpen ? emits('closeMore') : emits('openMore')
}
</script>
