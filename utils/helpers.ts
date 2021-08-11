export const getUptime = () => {
  let uptime = process.uptime()
  let unit = "s"

  if (uptime <= 1) {
    uptime *= 1000
    unit = "ms"
  }

  return `${Math.round(uptime * 10) / 10}${unit}`
}
