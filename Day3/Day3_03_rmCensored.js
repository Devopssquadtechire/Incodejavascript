function rmCensored(myObject)
{
Object.keys(myObject).forEach(keys => {(keys.includes('*')||(myObject[keys].includes('*')))?delete(myObject[keys]):0})
}

var swearWords = {"s*it": "m*rde", "sweet jesus": "doux jesus", "f***": "", "omg": "w*sh"}
rmCensored(swearWords)
console.log(swearWords)
console.log("--------------------------------------------")

var veggies = {"potato": "starch", "spin*ch": "green", "collard": "green", "tomato": "fr*it"}
rmCensored(veggies)
console.log(veggies)
console.log("--------------------------------------------")