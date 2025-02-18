//break statement
for(i = 0; i < 10; i++) {
    if(i === 5){
        break;
    }
    var textLine = 'The Text Line Number is ' + i + ", ";
    console.log(textLine)
}

console.log("=========================================the seperation line is here")

//continue statement 
for(i = 0; i < 10; i++) {
    if(i === 5){
        continue;
    }
    var  textLine2 = 'The Text Line Number is ' + i + ", ";
    console.log(textLine2)
}

