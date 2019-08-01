// 回文   'aba'
// function validPalindrome(str) {
//   if(!str || typeof str != 'string') return false
//   return str.split('').reverse().join('') === str   // 空间复杂度
// }
// console.log(validPalindrome('aba'))


// "A man, a plan, a canal: Panama"
// 包容大小写 
// 空 、特殊符号 忽略
var isPalinChar = (c) => {
  return /^[w]$/.test(c)
}
var isPalindrow = (s) => {
  s = s.toLowerCase()
  let left = 0,
    right = s.length - 1

  while(left < right) {
    if(!isPalinChar(s[left])) {
      left++
      continue
    }
    if(!isPalinChar(s[right])) {
      right--
      continue
    }
    if (s[left] == s[right]) {
      left++
      right--
    } else {
      break
    }
  }
  return right <= left
}
console.log(isPalindrow("A man, a plan, a canal: Panama"))
console.log(isPalindrow("race a car"))
