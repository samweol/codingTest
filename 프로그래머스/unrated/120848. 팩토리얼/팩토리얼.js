function solution(n) {
    const factorial = (num) => {
        if(num === 1) {
            return num
        }
        return factorial(num - 1) * num
    }
    
    let result = 1;
    let roop = 1;
    while(result <= n) {
        result = factorial(roop);
        roop ++
    }
    return roop - 2;
}