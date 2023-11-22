function solution(order) {
    let result = 0;
    const findNumber = [3, 6, 9];
    [...String(order)].map(item => {
        if(findNumber.includes(Number(item))) {
            result ++;
        }
    })
    
    return result
}