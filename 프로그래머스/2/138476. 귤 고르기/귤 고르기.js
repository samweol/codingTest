function solution(k, tangerine) {
    let tangerineTypeCount = {}
    tangerine.forEach(item => {
        if(item in tangerineTypeCount) {
            tangerineTypeCount[item] = tangerineTypeCount[item] + 1
        } else {
            tangerineTypeCount[item] = 1;
        }
    })
    const tangerineArr =  Object.entries(tangerineTypeCount).sort((a, b) => b[1] - a[1]);
    
    let type = 0;
    let sum = 0;
    for(let item of tangerineArr) {
        sum += item[1]
        type ++
        if(sum >= k) {
            return type
        }
    }
    
    return sum < k && type
    
    
}