a=[1,2,3,4]
a.splice(2,0,a.splice(1,1)[0])
console.log(a)