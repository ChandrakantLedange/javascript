// level {1/2/3}
// Level 1
// Calculate total of all the numbers in array [1, 2, 3] using one line of code.
// Output should be a number: 6

const arr = [1,2,3];
const reducer = (a,b)=> a+b;
cosnole.log(arr.reduce(reducer));


// Level2
const Numbers = [1, 3, 4, 6, 7, 8];

const removeEven = (Numbers, invert = false)=>{
    for(let i =0; i<Numbers.length; i++){
        const even = Numbers[i] % 2 === 0;
        if(even ^ invert){
            Numbers.splice(i--,1);
        }
    }
}
removeEven(Numbers);
console.log(Numbers);
