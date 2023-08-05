function solution(n) {
    // 제곱수는 약수의 개수가 홀수 !! 를 이용한다.
    let count = 0;
    for (let i = 1; i<=n; i++) {
        if (n % i === 0) {
            count ++;
        }
    }
    
    return count % 2 === 0 ? 2 : 1
}