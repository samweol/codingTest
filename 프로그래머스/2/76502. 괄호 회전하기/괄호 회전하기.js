function solution(s) {
     function isCorrectStr(str) {
        const CORRECT_TYPE = ["()", "{}", "[]"]
        
        if(str.includes(CORRECT_TYPE[0])) {
            str = str.replace(CORRECT_TYPE[0], "")
        }
         if(str.includes(CORRECT_TYPE[1])) {
            str = str.replace(CORRECT_TYPE[1], "")
        }
         if(str.includes(CORRECT_TYPE[2])) {
            str = str.replace(CORRECT_TYPE[2], "")
        }
         
         let flag = CORRECT_TYPE.some(item => str.includes(item))
         
         if(flag) {
             return isCorrectStr(str)
         }
         
         return str.length ? false : true
    }
    
    let result = 0;
    
    for(let i=0; i<s.length; i++) {
        s = s.slice(1) + s[0]
        if(isCorrectStr(s)) {
            result++
        }
    }
    return result
   
    
}