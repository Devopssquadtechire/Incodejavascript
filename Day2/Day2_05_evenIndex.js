function evenIndexes(myText)
{
    newArray=myText.split('')  
    console.log(newArray)      
    newArray1=['']
    j=0
    for(i=0;i<newArray.length;i+=2)
    {
        newArray1[j]=newArray[i]
        j+=1
    }
    console.log(newArray1)
}

evenIndexes('Lol')

console.log('-------------------------------------')
evenIndexes("You're weird")
//outcome will be [ 'Y', 'u', 'r', ' ', 'e', 'r' ]
console.log('-------------------------------------')
evenIndexes("")