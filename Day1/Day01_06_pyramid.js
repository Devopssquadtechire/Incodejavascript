function pyramid(base)
{
    for (i=1;i<=base;i++){
        var temp=""
        for (j=1;j<=(base*2-1);j++)
        {
            if (base%2 != 0) {
            (j>= base+1-i && j<=base -1 +i)?temp += "#" : temp += " "}
            else {
            (j+1>= base+1-i && j-1<=base -1 +i)?temp += "#" : temp += " "}
        }
        console.log(temp);
    }
        console.log("displayingsomething")    
}

pyramid(3)
pyramid(6)
pyramid(5)
pyramid(2)