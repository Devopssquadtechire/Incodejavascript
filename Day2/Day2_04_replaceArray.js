function replaceArray(myStringArray)
{
    for(i=0;i<myStringArray.length;i++)
    {
        for(j=0;j<myStringArray[i].length;j++)
        {            
            if (myStringArray[i].startsWith('h')||myStringArray[i].startsWith('H'))
            {
                myStringArray[i]=myStringArray[i].toUpperCase()
            }
        }
    }
        console.log("string starts with h or H is now ",myStringArray)
}

replaceArray(["banana", "suit", "hammer"])
replaceArray(["Hello", "there"])
replaceArray(["Hey!", "hey..."])