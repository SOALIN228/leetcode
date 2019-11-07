export default (str) => {
  const arr = str.split(' ')
  const result = arr.map(item => {
    return item.split('').reverse().join('')
  })
  return result.join(' ')
}
