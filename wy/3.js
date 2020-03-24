function jimu(n, m){
  while(m > 0) {
    for(let i = 0; i < n.length; i++) {
      if(i[0] != 0) {
        m = m + a[0];
        a[0] = 0;
      }
      if(i > 0) {
        if(a[i] > a[i-1]) {
          let reduce = a[i] -a[i-1];
          if(reduce > 0) {
            m = m + reduce - 1;
            a[i] = a[i] - reduce + 1;
          } else {
            m = m + reduce - 1;
            a[i] = a[i] - reduce + 1;
          }
        }
      }
    }
    return 'YES';
  }
  return 'NO';
}