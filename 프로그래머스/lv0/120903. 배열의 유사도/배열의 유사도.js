function solution(s1, s2) {
    let count = 0;
   s1.map(item => {
       s2.map(item2 => {
           if(item === item2) {
               count ++
           }
       })
   })
    return count;
}