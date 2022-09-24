const total = 1000000;
const array = Array(total);
console.log({ array });

console.time("for loop")
for (let index = 0; index < array.length; index++) {
  
}
console.timeEnd("for loop")

console.time("for of")
for (const iterator of array) {
    
}
console.timeEnd("for of")

console.time("for each")
array.forEach(element => {
   
});
console.timeEnd("for each")

const numArr = [1,2,3,4,5]
console.log({ numArr })

const mapArr = numArr.map((value) =>{
    return value * 3;
})
console.log({ mapArr })

const filterArr = numArr.filter((value) =>{
    return value % 2 === 0;
})
console.log({ filterArr })

const reduceArr = numArr.reduce((sum, value) =>{
    return sum+=value;
})
console.log({ reduceArr })

const myObj = { name: 'A', age: 25 }
const objMap = new Map(Object.entries(myObj))
for (const iterator of objMap) {
    console.log(iterator)
}