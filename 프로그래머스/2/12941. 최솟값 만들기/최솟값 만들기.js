function solution(A,B){
    const tempA = A;
    const tempB = B;
    
    tempA.sort((a, b) => a - b);
    tempB.sort((a, b) => b - a);
    
    let tempSum = 0;
    for(let i=0; i<tempA.length; i++) {
        tempSum += tempA[i] * tempB[i]
    }
    
    A.sort((a, b) => b - a);
    B.sort((a, b) => a - b);
    
    let sum = 0;
    for(let i=0; i<tempA.length; i++) {
        sum += tempA[i] * tempB[i]
    }
    
    return Math.min(tempSum, sum)
    
}