//  找到一个无序数组中的第k大的数
// [1,4, 2, 6, 9, 10]  3       
function kthlargest(arr, k) {
  if (k < 0 || k > arr.length - 1) return NaN
  return arr.sort((a, b) => b - a)[k-1]   // 从大到小排列
}


console.log(kthlargest([1, 4, 2, 6, 9, 10], 2))


// 但是sort的时间复杂度为O(n^2)    可以用快排