function averageMinMax(myArray)
{
    tempMin=myArray[0]
    tempMax=myArray[0]
    sum=0
    for(i=0;i<myArray.length;i++)
    {
        sum+=myArray[i]
        if ( tempMin>myArray[i] ) {tempMin = myArray[i]}
        if ( tempMax<myArray[i] ) {tempMax = myArray[i]}
    }
    console.log("minimum value is : ",tempMin)
    console.log("maximum value is : ",tempMax)
    console.log("average is ", sum/(myArray.length))
}

averageMinMax([-42, 0, 42])
// Output:
// ```Min: -42
// Max: 42
// Average: 0
console.log("------------------")
averageMinMax([30, 20, 100])
console.log("------------------")

averageMinMax([-23, -4, -12])
console.log("------------------")