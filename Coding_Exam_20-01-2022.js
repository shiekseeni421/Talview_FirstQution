// Q1 find median,mean and largest value in given Array

let inputArry=[8,1,6,2,6,4,2,0,7];
let LargestNumer=Math.max(...inputArry);
let Length= inputArry.length


// find Mean value
function findMeanValue(arr1,Length){
    let TotalSum=0;
    for(let i=0;i<Length;i++){
        TotalSum+=inputArry[i]
    }
    return TotalSum/inputArry.length;
}
//call the function findMeanValue
 let MeanValue=findMeanValue(inputArry,Length)
 
 //find medianvalue
 function findMedianValue(inputArry){
   const middle = (inputArry.length + 1) / 2;
   const sortedValue = [...inputArry].sort((a, b) => a - b);
   const isEvenValue = sortedValue.length % 2 === 0;
   return isEvenValue ? (sortedValue[middle - 1.5]+ sortedValue[middle - 0.5]) / 2 : sortedValue[middle - 1];
 }
 // call the function  findMedianValue
 let MedianValue=findMedianValue(inputArry)
 
 //append in object
 let all_Values={"Mean":MeanValue,"medaian":MedianValue,'Largest':LargestNumer}

 console.log(all_Values)