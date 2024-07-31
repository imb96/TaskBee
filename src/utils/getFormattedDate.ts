export const getFormattedDate = () => {
  const now = new Date()
  const fullDate = now.toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })
  const formatDate = fullDate.slice(0, 11)
  const formatTime = fullDate.slice(12, 24)
  return { formatDate, formatTime }
}
