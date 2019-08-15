function p (value) {
  return new Promise( resolve =>{
     setTimeout(() => {
       resolve(value)
     }, 1000);
  })
}

console.log('start')
async function prm () {
  console.log('asyc start')
  let a = await p(1)
  console.log(a)
  let b = await p(2)
  console.log(b)
  console.log('asyc end')
}
prm()
console.log('end')