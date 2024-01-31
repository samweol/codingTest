function solution(k, score) {
    let result = [];
    let scores = [];
    for(let i=0; i<score.length; i++) {
        if(result.length > k) {
            result.pop()
        }
        result.push(score[i]);
        result.sort((a, b) => b - a);
        if(i < k - 1) {
            scores.push(result[i])
        } else {
            scores.push(result[k - 1])
        }
        
    }
    
    return scores;
}