function solution(n) {
    let array = Array(n+1).fill(true);
    array[0] = array[1] = false; // 0, 1 은 제외하고 가야하므로
    
    // 2부터 N의 제곱근까지 반복해야하므로 반복문 사용
    for(let i=2; i<=Math.sqrt(n); i++) {
        if(array[i] === false) continue;
        
        for(let j = i * i; j<=n; j+=i) {
            array[j] = false;
        }
    }
    
   return array.filter(item => item).length;
}