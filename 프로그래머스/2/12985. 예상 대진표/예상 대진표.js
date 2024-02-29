function solution(n,a,b) {
    function matchNumber(a, b, round) {
        // 조건 수정 해야함!
        if(a === b) {
            return round;
        }
        
        return matchNumber(a % 2 === 0 ? a / 2 : parseInt(a / 2) + 1, b % 2 === 0 ? b / 2 : parseInt(b / 2) + 1, round + 1)
    }
    
    const result = matchNumber(a, b, 0);
    return result
}