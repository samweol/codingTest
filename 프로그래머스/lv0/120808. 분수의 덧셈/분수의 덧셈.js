function solution(numer1, denom1, numer2, denom2) {
    const upper = (numer1 * denom2 + numer2 * denom1);
    const lower = denom1 * denom2;
    
    // 최대 공약수 구하기
    const greatestCommonMeasure = (a, b) => {
        return a % b === 0 ? b : greatestCommonMeasure(b, a % b);
    }
    
    const common = greatestCommonMeasure (upper, lower);
    
    return [upper/common, lower/common]
}