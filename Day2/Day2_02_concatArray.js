function concatArray(myArray)
{
var tempString = ""
for (i=0;i<myArray.length;i++)
{
    tempString += myArray[i]
    if(i<myArray.length-1){tempString += " "}
}
console.log("The concatenated result string is " + "'" + tempString + ".'")
}

concatArray(["Hello", "this", "is", "dog"])
//expected outcome is 'Hello this is dog.'

concatArray(["All", "I", "want", "for", "christmas", "is", "you"])
//'All I want for christmas is you.'

 concatArray([])