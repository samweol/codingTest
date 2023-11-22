function solution(n) {
    // 약수가 3개이상이면 true를 반환하는 함수
    const calculate = (num) => {
        let result = [];
        for (let i = 1; i<=num; i ++) {
            if(num % i === 0) {
                result.push(i);
            }
        }
        
        return result.length > 2 ? true : false
    }
    let result =[]
    for (let i = 1 ; i<=n; i++) {
        if(calculate(i)) {
            result.push(i)
        }
    }
    
    return result.length;
}