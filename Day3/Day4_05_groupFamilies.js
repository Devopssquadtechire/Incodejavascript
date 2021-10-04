function groupFamilies(myArrayObject)
{
  flag=true
  resultArray={"":[]}
  console.log(myArray)
  myArrayObject.forEach(myObject => {
    Object.keys(myObject).forEach(keys => {
      if (keys.includes("surname")) 
      { 
          resultArray.add(myObject[surname])
          resultArray[myObject[surname].add(myObject.name)]
      }
    })
  })
}

groupFamilies([{"name": "Barack", "surname": "Obama"}, {"name": "Michelle", "surname": "Obama"}])
 