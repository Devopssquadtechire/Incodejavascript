function displayFullName(myName)
{
    splitName = myName.split(" ")
    console.log(splitName.length)
    console.log("My name is " + splitName[splitName.length-1] + ',' + myName)
}

displayFullName("Chandrabose")
displayFullName("James Bond")
displayFullName("Ada Lovelace")
displayFullName("Salvador Felipe Jacinto Dalí")