function sumNum (sum) {
  let num = 0
  if(sum< 10) {
    num = sum;
  }
  for(let i = 10; i<10^5; i=i*10) {
    for(let j =1; j<10;j++) {
      if(sum-j < i) {
        num = i + sum -j;
      } else {
        continue;
      }
    }
  }
  return num;
}