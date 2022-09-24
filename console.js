const people1 = { name: 'A', age: 25 }
const people2 = { name: 'B', age: 22 }

console.log({people1, people2})
console.log("%c Ahihi", "color: blue;")
console.table([people1,people2])

console.time('timer')
for (let index = 0; index < 1000000; index++) {
   
}
console.timeEnd('timer')

const test = () => {
    console.trace('test trace')
}

test();