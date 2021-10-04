function sortWords(myArray)
{
    var myObject = {"odd":[],"even":[]}
 for (arrayKey in myArray)
 {
     if (myArray[arrayKey].length%2==0)
     {
     console.log(myArray[arrayKey])
    //  myObject["even"]+=myArray[name]
    myObject["even"].push(myArray[arrayKey])
     }
     else
     {
         myObject["odd"].push(myArray[arrayKey])
     }
 }
 console.log(myObject.odd)
 console.log(myObject.even)
}

sortWords(["work", "hard", "mommy"])
sortWords([])