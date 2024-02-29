function solution(arr) {
    function getGcd(a, b) {
        if (b === 0) return a;
        return getGcd(b, a % b);
    }
    
    // 최대 공약수를 구해서 최소 공배수를 구하고, 계속 구함
    return arr.reduce((a, b) => (a * b) / getGcd(a, b));
}