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

console.log(dashesBetweenEven(1221));





