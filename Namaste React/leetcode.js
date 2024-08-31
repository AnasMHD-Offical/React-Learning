// var reverse = function(x) {
//     const isNegative = x.toString().split("")
//     if(isNegative[0] === "-"){
//        isNegative.reverse().pop()
//        isNegative.unshift("-")
       
//        return +isNegative.join("")
//     }else{
//        console.log(+isNegative.reverse().join(""));
       

//     }
// };

// console.log(reverse(-132));

// var averageValue = function(nums) {
    
//     const even = []
//     for(let i=0;i<nums.length;i++){
//         if(nums[i] % 2 === 0 && nums[i] % 3 === 0){
//             even.push(nums[i])
//         }
//     }
//     if(even.length === 0){
//         return 0
//     }else{
//         const out = even.reduce((sum,curr)=>{return sum += curr}) 
//         return (out/even.length)
        
//     }
// };
// console.log(averageValue([1,3,6,10,12,15]));

// var maxDepth = function(s) {
//     const str = s.split("")
//     let count  
//     let closeCount  
//     for(let i=0;i<str.length;i++){
//         if(str[i] === "("){
//             count++
//             count
//         }else if(str[i] === ")"){
//             closeCount = count
//             closeCount
//             count = 0
//         }
//     }
    
// };
// // maxDepth("(1+(2*3)+((8)/4))+1")

// const nums = [3,45,2,6]
// const min = nums.reduce((min,curr)=>{ 
//     if(curr < min){
//         min = curr
//     }
//     return min
//  },Infinity)
// min

// function hello(){
//    for(let values of arguments){
//     console.log(values);
//    }
// }

// hello("Hello","jgkjgaesjd")
