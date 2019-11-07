export default (str) => {
  let count = 0
  // 给定任意子输入都返回第一个符合条件的子串
  const match = (str) => {
    const j = str.match(/^(0+|1+)/)[0]
    const o = (j[0] ^ 1).toString().repeat(j.length)
    if (str.startsWith(j + o)) {
      return true
    } else {
      return false
    }
  }
  // 通过for循环控制程序运行的流程
  for (let i = 0, len = str.length - 1; i < len; i++) {
    const sub = match(str.slice(i))
    if (sub) {
      count++
    }
  }
  return count
}
