function solution(s){
    const sArr = s.split("");
    const checkArr = [];
    
    // 시작이 )로 시작하면 무조건 잘못된 괄호이기때문에
    if(sArr[0] === ")" || sArr[sArr.length - 1] === "(") {
        return false
    }
    
    for(let i =0; i<sArr.length; i++) {
        if(sArr[i] === "(") {
            checkArr.push(sArr[i]);
        } else {
            const item = checkArr.pop();
            if(item !== "(") {
                return false
            }
        }
    }
    
    return checkArr.length > 0 ? false : true
}