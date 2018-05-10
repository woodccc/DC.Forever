export function toTwo(number) {
  return number < 10 ? `0${number}` : String(number)
}

export function toReadbleTime(number) {
  const displayXms = number % 100
  const seds = (number - displayXms) / 100
  const displaySeds = ((seds / 60) >= 1) ? (seds % 60) : seds
  const mins = ((seds / 60) >= 1) ? ((seds - displaySeds) / 60) : 0
  
  const time = `${toTwo(mins)}:${toTwo(displaySeds)}:${toTwo(displayXms)}`
  
  return time
}
