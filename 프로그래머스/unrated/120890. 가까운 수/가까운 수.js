function solution(array, n) {
   const first = array.map(item => Math.abs(n - item)).sort((a, b) => a - b)[0];
    // 음수라면 배열안의 숫자가 더 큰 것, 양수라면 n이 더 큰 상황
    // 둘의 절댓값 차이가 가장 적은 것을 찾아야함
    
    if(array.includes(n - first)) {
        return n - first
    } else {
        return n + first
    }
    
}