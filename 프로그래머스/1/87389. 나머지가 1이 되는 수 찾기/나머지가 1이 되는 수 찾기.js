function solution(n) {
    let num = [];
    for (let i=1; i<=n; i++) {
        const flag = n % i;
        if(flag === 1) {
            num.push(i)
        }
    }
    
    return num.sort((a, b) => a- b)[0]
}