function hasValue(varObject,valueToCheck)
{
    var exist = false
    
    console.log("The value to check ",valueToCheck)

  for (keyName in varObject) {

      console.log("Object key of " , keyName,  " is ", varObject[keyName]) //displaying each keys

      if (valueToCheck==varObject[keyName]){exist=true}
  }
  console.log(valueToCheck," value exist check returns ", exist)
}

hasValue({"hello": "bonjour", "my": "mon"}, "bonjour")
//expected true
console.log("--------------------------------------------")
hasValue({"hello": "bonjour", "my": "mon"}, "hello")
console.log("--------------------------------------------")
hasValue({"hello": "bonjour", "my": "mon"}, "tasty")
console.log("--------------------------------------------")