function translate(myObject,mySentence)
{
  flag=true
  myArray=mySentence.split(' ');
  console.log(myArray)
  myArray.forEach(element => {
    (element in myObject) ? console.log(myObject[element]) :flag=false
    })
    flag?0:console.log("Error: missing value")
}

translate({"je": "I", "suis": "am", "pere": "father", "ton": "your"}, "je suis ton pere")
 translate({"the": "le", "cute": "mignon", "your": "ton", "dog": "chien", "is": "est"}, "the dog is cute")
 translate({"the": "le", "cute": "mignon", "your": "ton", "dog": "chien", "is": "est"}, "the dog is fluffy")