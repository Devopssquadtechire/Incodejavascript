var cars = ['xa','b','xc',23,'','\t']
var ownerofcars = ["john","mark",'chandra',23,'',]
console.log(cars)
console.log(cars[cars.length-1])
cars.sort()

for (i=0;i<cars.length;i++)
{
    const element = cars[i]
    console.log('something at slot ' + i + ' is ' + cars[i] + " owned by "+ownerofcars[i])
}