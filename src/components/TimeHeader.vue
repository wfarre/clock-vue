<template>
  <header class="header" :class="isOpen && 'toTop'">
    <div>
      <p class="text">
        <img :src="currentTimeIcon" :alt="greeting" />
        {{ greeting }}<span class="mobile-hidden">, it's currently</span>
      </p>
      <p class="time">
        {{ hours }}<span class="second-indicator">:</span>{{ minutes
        }}<span class="timezone">{{ props.data?.timezone.code }}</span>
      </p>
      <p class="text">
        in {{ props.data?.location.city.name }}, {{ props.data?.location.country.alpha2 }}
      </p>
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
    @include mobile-only() {
      transform: translateY(calc(-100% + 98px + 56px - 232px));
    }
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

    .timezone {
      font-size: 40px;
      font-weight: 300;
    }

    @include mobile-only() {
      font-size: 100px;
      .timezone {
        font-size: 15px;
      }
    }
  }
}

.second-indicator {
  animation-name: fade-in-out;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

@keyframes fade-in-out {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 50%;
  }
  100% {
    opacity: 1;
  }
}
</style>

<script setup>
import { computed } from 'vue'

import MoreButton from './MoreButton.vue'
import { useCurrentTime } from '../libs/useCurrentTime.js'
import iconSun from '/assets/desktop/icon-sun.svg'
import iconMoon from '/assets/desktop/icon-moon.svg'

const { hours, minutes } = useCurrentTime()

const props = defineProps({
  isOpen: Boolean,
  data: Object,
})

const emits = defineEmits(['closeMore', 'openMore'])
const currentTimeIcon = computed(() => (hours >= 7 && hours < 18 ? iconSun : iconMoon))
const greeting = computed(() => {
  if (hours >= 6) {
    return 'Good morning'
  } else if (hours >= 12) {
    return 'Good afternoon'
  } else {
    return 'Good evening'
  }
})
</script>
