function printAbbreviations(textToCheck)
{
    var tempString=""
    if (textToCheck.length<=2)
    {
        for (i=0;i<textToCheck.length;i++)
        {
            tempString +=textToCheck[i]
        }
            console.log(tempString +  " "+textToCheck.length)
    }
    else
    {
        for (i=0;i<3;i++)
        {
            tempString +=textToCheck[i]
        }
            console.log(tempString + " "+ textToCheck.length)
    }
}

printAbbreviations("chandrabose")
printAbbreviations("cha")
printAbbreviations("!")
printAbbreviations("I a")
printAbbreviations("Supercalifragilisticexpialidocious")