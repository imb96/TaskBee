export const getTime = () => {
  const now = new Date()
  const seoulTime = now.toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })
  return seoulTime
}
