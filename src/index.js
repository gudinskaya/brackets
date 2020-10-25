module.exports = function check(str, compaineBracketsConfig) {
  while (str) {
    let k = 0
    for (const i of compaineBracketsConfig) {
      let compaineBrackets = i[0] + i[1]
      if (str.includes(compaineBrackets)) {
        str = str.replace(compaineBrackets, '')
        k += 1
      }
    }
    if (k === 0) {
      break
    }
  }
  return str == '' ? true : false
}
