function solution(i, j, k) {
    let result = 0;
    for (let s = i; s<=j; s++) {
        [...String(s)].map(item => {
            if(item == k) {
                result ++
            }
        })
    }
    
    return result;
}