function solution(s) {
    let arr = []; // [b, a, n]
    let result = {};
    let answer = [];
    [...s].map((item, idx) => {
        if(arr.includes(item)) {
            const index = idx - result[item];
            answer.push(index)
            result[item] = idx;
        } else {
            arr.push(item);
            result[item] = idx;
            answer.push(-1);
        }
    })
    
    return answer
    
    
}