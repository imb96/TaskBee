export const getTime = () => {
  const now = new Date()
  return now.toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })
}
