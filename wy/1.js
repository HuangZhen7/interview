function fanbei(a,b,p,q) {
  let ap = a + p,pq = p * q;
  let index = 0;
  while(a < b) {
    if(a + p >= b) {
      index++;
    } else {
      if(ap >= pq) {
        a = a + p;
        index++;
      } else {
        p = p*q;
        index++;
        // a = a + p;
      }
    }
  }
  return index;
}

console.log(fanbei(1,5,7,2))
console.log(fanbei(3,5,1,2))