// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.

const dashesBetweenEven=(number)=>{
    const numberAsString = number.toString();
    const result = [numberAsString[0]];
    for(let x=1 ; x<numberAsString.length;x++){
        if(numberAsString[x-1]%2===0 && numberAsString[x]%2===0){
            result.push('-',numberAsString[x]);
        }
        else{
            result.push(numberAsString[x]);
        }
        
    }

    return result.join('');

}

console.log(dashesBetweenEven(25468));





