function solution(numbers) {
    let arr = [];
    for(let i = 0; i<numbers.length; i ++) {
      for (let j = 1; j<numbers.length; j ++) {
          if(i !== j) {
              arr.push(numbers[i] * numbers[j]);
          }   
          
      } 
   }
    
    arr.sort((a, b) => b - a);
    return arr[0]
}