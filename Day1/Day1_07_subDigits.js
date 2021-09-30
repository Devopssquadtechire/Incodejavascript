function subDigits(number)
{
    var numberSplit=number
    var numberSplit1=number
    var finalNumber=0
    while (numberSplit>0)
    {
        reminder=Math.floor(numberSplit%10)
        numberSplit=Math.floor(numberSplit/10)
        numberSplit1-=reminder
    }    
    if (number < 0)
    {console.log("Argument Error! Please pass value > 0")}
    else{console.log("Result for number " + number + " is " + numberSplit1)}
}

subDigits(12)
subDigits(4000000)
subDigits(0)
subDigits(451)
subDigits(-12)