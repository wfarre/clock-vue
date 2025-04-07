import { ref } from 'vue'

export const useCurrentTime = () => {
  const remainingSeconds = ref(0)
  const hours = ref(0)
  const minutes = ref(0)

  const getCurrentTime = () => {
    const currentTime = new Date()
    remainingSeconds.value = 60 - currentTime.getSeconds()
    hours.value = currentTime.getHours()
    minutes.value =
      currentTime.getMinutes() < 10
        ? '0' + String(currentTime.getMinutes())
        : String(currentTime.getMinutes())
  }

  setInterval(() => {
    getCurrentTime()
  }, remainingSeconds)

  return { hours, minutes }
}
