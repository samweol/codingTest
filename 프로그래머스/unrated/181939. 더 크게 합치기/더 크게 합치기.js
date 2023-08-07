function solution(a, b) {
    const sum1 = String(a) + String(b);
    const sum2 = String(b) + String(a);
    
    return Number(sum1) > Number(sum2) ?  Number(sum1) : Number(sum2)
}