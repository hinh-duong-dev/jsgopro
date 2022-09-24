const person = { name: 'A', age: 25, address: 'Hanoi' }

// function display(person){
//     const { name, age, address } = person;
//     console.log(name)
//     console.log(age)
//     console.log(address)
// }

function display({ name, age, address } ){
    console.log(name)
    console.log(age)
    console.log(address)
}

const person1 = {...person, address: 'Ho Chi Minh City'}

display(person);
display(person1);