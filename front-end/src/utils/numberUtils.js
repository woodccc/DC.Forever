export function toTwo(number) {
  return number < 10 ? `0${number}` : String(number)
}

export function toReadbleTime(number) {
  const time = Math.floor(number)
  const displayXms = time % 100
  const seds = (time - displayXms) / 100
  const displaySeds = ((seds / 60) >= 1) ? (seds % 60) : seds
  const mins = ((seds / 60) >= 1) ? ((seds - displaySeds) / 60) : 0
  
  return `${toTwo(mins)}:${toTwo(displaySeds)}:${toTwo(displayXms)}`
}
