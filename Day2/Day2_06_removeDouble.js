function removeDouble(myArray)
{

    for (i=0;i<=myArray.length;)
    {
        if (myArray.indexOf(myArray[i],i+1)>0)
        {
            myArray.splice(i,1)
        }
        else i++
    }
    console.log(myArray)

}

var stuff = ["suit", "suit", "clock", "butter", "suit"]
removeDouble(stuff)