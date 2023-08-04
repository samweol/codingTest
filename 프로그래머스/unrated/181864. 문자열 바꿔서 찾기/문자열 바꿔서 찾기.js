function solution(myString, pat) {
    const translateArr = [...myString].map(item => {
        if(item === 'A') {
            return "B"
        } else {
            return "A"
        }
    });
    
   const translateStr = translateArr.reduce((acc, cur) => {
       return acc + cur
   },'')
   
   return translateStr.includes(pat) ? 1 : 0
}