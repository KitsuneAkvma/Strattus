export const useConverterTo24h = (time12h: string | undefined) => {
  if (!time12h) return undefined
  const [time, period] = time12h.split(' ')
  const [hours, minutes] = time.split(':')

  let hours24 = Number(hours)
  const minutes24 = Number(minutes)

  if (period === 'PM' && hours24 !== 12) {
    hours24 += 12
  } else if (period === 'AM' && hours24 === 12) {
    hours24 = 0
  }
  const time24h: [number, number] = [hours24, minutes24]
  return time24h
}
