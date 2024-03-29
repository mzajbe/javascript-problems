// Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
let first=(array,n)=>{
    if (array==null){
        return void 0;
    }
    if(n==null){
        return array[0];
    }
    if(n<0){
        return [];
    }
    return array.slice(0,n);
};

// input 
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));

// console.log(first([1,2,3,4],3));
