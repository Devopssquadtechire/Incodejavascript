function changeTitle()
{
 var myElement = document.getElementById("myTitle")
 myElement.innerHTML = 'something'
}

document.getElementById("Then").addEventListener("click", displayAlertThen)
document.getElementById("Now").addEventListener("click", displayAlertNow)

function displayAlertThen(){
    alert("The Beatles (January 13, 1969)")
}

function displayAlertNow(){
    alert("Carly Rae Jepsen (March 1, 2012)")
}