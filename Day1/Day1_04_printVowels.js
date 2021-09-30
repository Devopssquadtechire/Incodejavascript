function printVowels(textToCheck)
{
    const regex = /[aeiou]/g;
    for (i=0;i<textToCheck.length;i++)
    {
        if (textToCheck[i].match(regex))
            console.log(textToCheck[i])

    }
}

printVowels("chandrabose")