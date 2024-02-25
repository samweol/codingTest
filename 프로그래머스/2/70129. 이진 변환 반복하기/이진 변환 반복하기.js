function solution(s) {
    function removeZero (str, count, transformCount) {
        let zeroCount = count;
        const strArr = str.split("")
        let covertStr = ""
        
        // 종료조건
        if(str === "1") {
            return [transformCount, zeroCount]
        }
        
        for(let item of strArr) {
            if(item == 0) {
                zeroCount++;
            } else {
                covertStr += item
            }
        }
        
        const nextStr = covertStr.length.toString(2);
        
        return removeZero(nextStr, zeroCount, transformCount + 1)
        
    }
    
    return removeZero(s, 0, 0)
    
    
}