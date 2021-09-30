const person = {
    firstName : "Chandrabose",
    lastName : "Thavakkani",
    age : 40,
    eyeColor : 'blue',
    books : ['english','maths'],
    cars : [{name:'ford',type: 'cedan'}, {name:'Hexa',type: 'SUV'}],
    fullName: function() {return this.firstName + " "+ this.lastName}
}

// this.eyeColor = 'brown'
// console.log( person.fullName() + "has borrowed books " + person.books + " has car " + person.cars[0].name + " of type " + person.cars[0].type)

for (const key in person)
{
    console.log(key + " value is " + person[key])
}