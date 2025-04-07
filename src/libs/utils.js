export const weekOfYear = (date) => {
  const startOfYear = new Date(date.getFullYear(), 0, 1)
  startOfYear.setDate(startOfYear.getDate() + (startOfYear.getDay() % 7))
  return Math.round((date - startOfYear) / (7 * 24 * 3600 * 1000))
}

export const daysIntoYear = (date) => {
  return (
    (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) -
      Date.UTC(date.getFullYear(), 0, 0)) /
    24 /
    60 /
    60 /
    1000
  )
}
