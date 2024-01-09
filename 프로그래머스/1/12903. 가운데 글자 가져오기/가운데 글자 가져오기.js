function solution(s) {
    // 길이가 짝수인 경우와 길이가 홀수인 경우
    if(s.length % 2 === 0) {
        // 길이가 짝수
        return [...s][Math.floor(s.length / 2) -1] + [...s][Math.floor(s.length / 2)]
    } else {
        // 길이가 홀수
        
        return [...s][Math.floor(s.length / 2)]
    }
}