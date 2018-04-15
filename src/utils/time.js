const d = new Date()

const months = ['January', 'February', 'March', 'April', 'May',
  'June', 'July', 'August', 'September', 'October', 'November', 'December']

const getMonth = () => (months[d.getMonth()])

const getDay = () => (d.getDay())

const getHour = () => (d.getHours())

const getMinute = () => (d.getMinutes())


export {
  getMonth,
  getDay,
  getMinute,
  getHour,
}
