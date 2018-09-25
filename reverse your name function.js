function reverseString(reverseMe){
    var reversed = " "
    for (var i = reverseMe.length - 1; i >= 0; i--){
        reversed += reverseMe[i];
    }
    return reversed;
}
console.log(reverseString( "your name here" ))
